import { Container } from "./styles";
import { MdHexagon } from "react-icons/md";

export function Footer() {
    return (
        <Container>
            <div>
                <MdHexagon />
                <strong>food explorer</strong>
            </div>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}
