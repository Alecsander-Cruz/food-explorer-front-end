import { useEffect, useState } from "react";
import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function IngredientItem({ isNew, value, onClick, ...rest }) {
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (value) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [value]);

    return (
        <Container isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button
                onClick={onClick}
                type="button"
                className={isNew ? "button-add" : "button-delete"}
                disabled={disabled}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
