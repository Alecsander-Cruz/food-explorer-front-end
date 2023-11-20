import {
    Container,
    LikeOrEdit,
    Photo,
    Name,
    Description,
    Price,
    LastDiv,
    Quantity,
    Controls,
    Add,
    DishDetails
} from "./styles";

import { RiHeartLine } from "react-icons/ri";
import { PiPencilSimple } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";

import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import dishPhotoPlaceHolder from "../../assets/DishPlaceHolder.svg";

export function DishCard({ data, ...rest }) {
    const { user } = useAuth();
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(data ? data.price : 0);
    const navigate = useNavigate();

    function getPhoto(dish) {
        const dishPhoto = dish.photo
            ? `${api.defaults.baseURL}/files/${dish.photo}`
            : dishPhotoPlaceHolder;

        return dishPhoto;
    }

    function handleQuantityDecrease() {
        if (count > 1) {
            setCount(count => count - 1);
            setPrice;
        }
    }

    function handleDishDetails(dishId) {
        navigate(`/dish-details/${dishId}`);
    }

    function handleDishEdit(dishId) {
        navigate(`/dish-edit/${dishId}`);
    }

    useEffect(() => {
        if (data) {
            setPrice(count * data.price);
        }
    }, [count]);

    return (
        <Container {...rest}>
            {[USER_ROLE.ADMIN].includes(user.role) && (
                <LikeOrEdit onClick={() => handleDishEdit(data.id)}>
                    <PiPencilSimple />
                </LikeOrEdit>
            )}
            {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <LikeOrEdit>
                    <RiHeartLine />
                </LikeOrEdit>
            )}
            <DishDetails onClick={() => handleDishDetails(data.id)}>
                <Photo src={getPhoto(data)} alt={`Imagem de ${data.name}`} />
                <Name>
                    <span>{data.name} &gt;</span>
                </Name>
                <Description>{data.description}</Description>

                <Price>R$ {price ? price : data.price}</Price>
            </DishDetails>

            {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <LastDiv>
                    <Quantity>
                        <Controls onClick={handleQuantityDecrease}>
                            <FiMinus />
                        </Controls>
                        {count}
                        <Controls onClick={() => setCount(count => count + 1)}>
                            <FiPlus />
                        </Controls>
                    </Quantity>
                    <Add>incluir</Add>
                </LastDiv>
            )}
        </Container>
    );
}
