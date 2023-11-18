import { Container } from "./styles.js";

import { FaAngleLeft } from "react-icons/fa6";

export function BackButton({ onClick }) {
    return (
        <Container onClick={onClick}>
            <FaAngleLeft />
            <span>voltar</span>
        </Container>
    );
}
