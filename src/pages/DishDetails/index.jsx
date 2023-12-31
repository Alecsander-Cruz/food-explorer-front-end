import {
    Container,
    Content,
    LeftDiv,
    RightDiv,
    Photo,
    Name,
    Description,
    Tags,
    LastDiv,
    Quantity,
    Controls,
    Add,
    Edit
} from "./styles.js";

import dishPhotoPlaceHolder from "../../assets/DishPlaceHolder.svg";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FiMinus, FiPlus } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api.js";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Footer } from "../../components/Footer";
import { IngredientTag } from "../../components/IngredientTag";

import { USER_ROLE } from "../../utils/roles.js";

export function DishDetails() {
    const { user } = useAuth();
    const [dish, setDish] = useState(null);
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(dish ? dish.price : 0);

    const params = useParams();
    const navigate = useNavigate();

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function getPhoto(dishObject) {
        const dishPhoto = dishObject.photo
            ? `${api.defaults.baseURL}/files/${dishObject.photo}`
            : dishPhotoPlaceHolder;

        return dishPhoto;
    }

    function handleQuantityDecrease() {
        if (count > 1) {
            setCount(count => {
                return count - 1;
            });
        }
    }

    function handleQuantityIncrease() {
        setCount(count => {
            return count + 1;
        });
    }

    function handleGoBack() {
        navigate("/");
    }

    function handleEditDish() {
        navigate(`/dish-edit/${dish.id}`);
    }

    useEffect(() => {
        if (dish) {
            setPrice(count * dish.price);
        }
    }, [count]);

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`, {
                withCredentials: true
            });
            setDish(response.data);
        }
        fetchDish();
    }, []);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <Header onOpenMenu={() => setMenuIsOpen(true)} />
            {dish && (
                <Content>
                    <LeftDiv>
                        <BackButton onClick={handleGoBack} />
                        <Photo
                            src={getPhoto(dish)}
                            alt={`Imagem de ${dish.name}`}
                        />
                    </LeftDiv>
                    <RightDiv>
                        <Name>{dish.name}</Name>
                        <Description>{dish.description}</Description>
                        {dish.ingredients && (
                            <Tags>
                                {dish.ingredients.map(ingredient => {
                                    return (
                                        <IngredientTag
                                            key={String(ingredient.id)}
                                            name={ingredient.name}
                                        />
                                    );
                                })}
                            </Tags>
                        )}
                        {[USER_ROLE.CUSTOMER].includes(user.role) && (
                            <LastDiv>
                                <Quantity>
                                    <Controls onClick={handleQuantityDecrease}>
                                        <FiMinus />
                                    </Controls>
                                    {count}
                                    <Controls onClick={handleQuantityIncrease}>
                                        <FiPlus />
                                    </Controls>
                                </Quantity>
                                <Add>
                                    <PiReceipt />
                                    <p>{`pedir \u00B7 R$ ${
                                        price ? price : dish.price
                                    }`}</p>
                                </Add>
                            </LastDiv>
                        )}
                        {[USER_ROLE.ADMIN].includes(user.role) && (
                            <LastDiv>
                                <Edit onClick={handleEditDish}>
                                    Editar prato
                                </Edit>
                            </LastDiv>
                        )}
                    </RightDiv>
                </Content>
            )}
            <Footer />
        </Container>
    );
}
