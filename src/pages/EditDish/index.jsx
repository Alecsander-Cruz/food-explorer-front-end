import { useEffect, useState } from "react";
import {
    Container,
    Content,
    Form,
    Title,
    FirstDiv,
    Photo,
    Name,
    SecondDiv,
    Category,
    ThirdDiv,
    Ingredients,
    Price,
    FourthDiv,
    Description
} from "./styles";

import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

import { PiUploadSimple } from "react-icons/pi";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";
import { useAuth } from "../../hooks/auth";

export function EditDish() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { updateDish } = useAuth();

    const [dish, setDish] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        ingredients: []
    });

    const [newDish, setNewDish] = useState({
        id: 0,
        name: "",
        category: "",
        price: "",
        description: "",
        ingredients: []
    });

    const [name, setName] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const navigate = useNavigate();
    const params = useParams();

    // ----- INGREDIENTS -----

    function handleAddIngredient() {
        setNewIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setNewIngredients(prevState =>
            prevState.filter(ingredient => ingredient !== deleted)
        );
    }

    // ----- INGREDIENTS -----

    // ----- PHOTO -----

    const [photoFile, setPhotoFile] = useState(null);

    function handleDishPhotoChange(event) {
        const file = event.target.files[0];
        setPhotoFile(file);
    }

    function showFileName(file) {
        if (file === null) {
            return "Selecione imagem para alterá-la";
        } else {
            if (file) {
                return file.name;
            } else {
                return setPhotoFile(null);
            }
        }
    }

    // ----- PHOTO -----

    function handleBack() {
        navigate("/");
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover esta nota?");

        if (confirm) {
            await api.delete(`/dishes/photo/${params.id}`, {
                withCredentials: true
            });

            await api.delete(`/dishes/${params.id}`, { withCredentials: true });
        }

        handleBack();
    }

    async function handleUpdateDish() {
        if (!name) {
            return alert("Título vazio!");
        }

        if (!category) {
            return alert("Categoria vazia!");
        }

        if (newIngredients.length === 0) {
            return alert(
                "Nenhum Ingrediente foi adicionado, por favor, adicione pelo menos um ingrediente!"
            );
        }

        if (newIngredient) {
            return alert(
                "Existe conteúdo não adicionado no Ingrediente. Clique para adicionar ou deixe-o vazio!"
            );
        }

        if (!price) {
            return alert("Preço vazio!");
        }

        if (!description) {
            return alert("Descrição vazia!");
        }

        newDish.id = dish.id;
        newDish.name = name;
        newDish.category = category;
        newDish.price = price;
        newDish.description = description;
        newDish.ingredients = newIngredients;

        try {
            await updateDish({ dish: newDish, photoFile });

            handleBack();
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        }
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`, {
                withCredentials: true
            });

            const dish = response.data;

            setDish(dish);
        }

        fetchDish();
    }, []);

    useEffect(() => {
        setName(dish.name);
        setCategory(dish.category);
        setPrice(dish.price);
        setDescription(dish.description);
        setIngredients(dish.ingredients);
    }, [dish]);

    useEffect(() => {
        setNewIngredients(() => {
            const ingredientsNames = ingredients.map(ingredient => {
                return ingredient.name;
            });
            return ingredientsNames;
        });
    }, [ingredients]);

    useEffect(() => {
        if (
            name &&
            category &&
            newIngredients.length > 0 &&
            price &&
            description
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [name, category, newIngredients, price, description]);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <Content>
                <BackButton onClick={handleBack} />
                <Title>Editar Prato</Title>
                {dish !== null && (
                    <Form>
                        <FirstDiv>
                            <Photo>
                                <span>Imagem do prato</span>
                                <label htmlFor="photo">
                                    <PiUploadSimple />
                                    {showFileName(photoFile)}
                                    <input
                                        type="file"
                                        id="photo"
                                        placeholder="Selecione imagem"
                                        onChange={handleDishPhotoChange}
                                    />
                                </label>
                            </Photo>
                            <Name>
                                <span>Nome</span>
                                <Input
                                    type="text"
                                    placeholder="Ex.: Salada Cesar"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </Name>
                            <Category>
                                <span>Categoria</span>
                                <div>
                                    <select
                                        name="category-list"
                                        id="category"
                                        onChange={e =>
                                            setCategory(e.target.value)
                                        }
                                        defaultValue=""
                                        value={category}
                                    >
                                        <option
                                            className="placeholder"
                                            disabled
                                            value=""
                                        >
                                            Escolha uma categoria
                                        </option>
                                        <option value="refeicao">
                                            Refeição
                                        </option>
                                        <option value="sobremesa">
                                            Sobremesa
                                        </option>
                                        <option value="bebida">Bebida</option>
                                    </select>
                                </div>
                            </Category>
                        </FirstDiv>
                        <SecondDiv>
                            <Ingredients>
                                <span>Ingredientes</span>
                                <section>
                                    {newIngredients.map((ingredient, index) => {
                                        return (
                                            <IngredientItem
                                                key={String(index)}
                                                value={ingredient}
                                                onClick={() =>
                                                    handleRemoveIngredient(
                                                        ingredient
                                                    )
                                                }
                                            />
                                        );
                                    })}
                                    <IngredientItem
                                        isNew
                                        placeholder="Adicionar"
                                        value={newIngredient}
                                        onChange={e =>
                                            setNewIngredient(e.target.value)
                                        }
                                        onClick={handleAddIngredient}
                                    />
                                </section>
                            </Ingredients>
                            <Price>
                                <span>Preço</span>
                                <Input
                                    type="number"
                                    placeholder="R$ 00,00"
                                    onChange={e => setPrice(e.target.value)}
                                    value={price}
                                />
                            </Price>
                        </SecondDiv>
                        <ThirdDiv>
                            <Description>
                                <span>Descrição</span>
                                <textarea
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                    onChange={e =>
                                        setDescription(e.target.value)
                                    }
                                    value={description}
                                />
                            </Description>
                        </ThirdDiv>
                        <FourthDiv>
                            <Button
                                title="Excluir prato"
                                onClick={handleRemove}
                            />
                            <Button
                                title="Salvar alterações"
                                disabled={buttonDisabled}
                                onClick={handleUpdateDish}
                            />
                        </FourthDiv>
                    </Form>
                )}
            </Content>
            <Footer />
        </Container>
    );
}
