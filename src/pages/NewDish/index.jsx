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

//  imagem placeholder para pratos que nao seja adicionada a foto
import dishPhotoPlaceHolder from "../../assets/DishPlaceHolder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { PiUploadSimple } from "react-icons/pi";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { IngredientItem } from "../../components/IngredientItem";

export function NewDish() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const navigate = useNavigate();

    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState =>
            prevState.filter(ingredient => ingredient !== deleted)
        );
    }

    function handleBack() {
        navigate("/");
    }

    // ----- PHOTO -----

    const [photoFile, setPhotoFile] = useState(null);

    function handleDishPhotoChange(event) {
        const file = event.target.files[0];
        setPhotoFile(file);
    }

    // ----- PHOTO -----

    async function handleNewDish() {
        if (photoFile === null) {
            return alert("Foto do prato não selecionada!");
        }
        if (!name) {
            return alert("Título vazio!");
        }

        if (!category) {
            return alert("Categoria vazia!");
        }

        if (ingredients.length === 0) {
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

        const dish_id = await api.post(
            "/dishes",
            {
                name,
                category,
                ingredients,
                price,
                description
            },
            { withCredentials: true }
        );

        if (photoFile !== null) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("photo", photoFile);
            await api.patch(`/dishes/photo/${dish_id.data}`, fileUploadForm, {
                withCredentials: true
            });
        }

        // console.log(dish_id.data);

        // const response = await api.get(`/dishes/${dish_id.data}`, {
        //     withCredentials: true
        // });

        // console.log(response);

        alert("Prato criado com sucesso!");

        handleBack();
    }

    useEffect(() => {
        if (
            name &&
            category &&
            ingredients.length > 0 &&
            price &&
            description &&
            photoFile !== null
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [name, category, ingredients, price, description, photoFile]);

    useEffect(() => {}, [photoFile]);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            <Content>
                <BackButton onClick={handleBack} />
                <Title>Novo Prato</Title>
                <Form>
                    <FirstDiv>
                        <Photo>
                            <span>Imagem do prato</span>
                            <label htmlFor="photo">
                                <PiUploadSimple />
                                {photoFile === null
                                    ? "Selecione imagem"
                                    : photoFile.name}
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
                                placeholder="Ex.: Salada Cesar"
                                onChange={e => setName(e.target.value)}
                            />
                        </Name>
                        <Category>
                            <span>Categoria</span>
                            <div>
                                <select
                                    name="category-list"
                                    id="category"
                                    onChange={e => setCategory(e.target.value)}
                                    defaultValue=""
                                >
                                    <option
                                        className="placeholder"
                                        disabled
                                        value=""
                                    >
                                        Escolha uma categoria
                                    </option>
                                    <option value="refeicao">Refeição</option>
                                    <option value="sobremesa">Sobremesa</option>
                                    <option value="bebida">Bebida</option>
                                </select>
                            </div>
                        </Category>
                    </FirstDiv>
                    <SecondDiv>
                        <Ingredients>
                            <span>Ingredientes</span>
                            <section>
                                {ingredients.map((ingredient, index) => {
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
                            />
                        </Price>
                    </SecondDiv>
                    <ThirdDiv>
                        <Description>
                            <span>Descrição</span>
                            <textarea
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Description>
                    </ThirdDiv>
                    <FourthDiv>
                        <Button
                            title="Salvar alterações"
                            disabled={buttonDisabled}
                            onClick={handleNewDish}
                        />
                    </FourthDiv>
                </Form>
            </Content>
            <Footer />
        </Container>
    );
}
