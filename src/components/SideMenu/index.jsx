import { Container, Header, Button, Nav, FooterSpace } from "./styles";
import { FiX } from "react-icons/fi";

import { Footer } from "../Footer";
import { Search } from "../Search";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <Button onClick={onCloseMenu}>
                    <FiX />
                </Button>
                <h1>Menu</h1>
            </Header>
            <Nav>
                <Search />
                <a href="#" data-menu-active="true" onClick={handleSignOut}>
                    Sair
                </a>
            </Nav>
            {/* <FooterSpace>
                <Footer />
            </FooterSpace> */}
        </Container>
    );
}
