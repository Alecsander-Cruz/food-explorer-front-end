import { Container, Header, Button, Nav, FixedFooter } from "./styles";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Search } from "../Search";
import { Footer } from "../Footer";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles.js";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
    const { signOut, user } = useAuth();
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
                {[USER_ROLE.ADMIN].includes(user.role) && (
                    <a href="#" data-menu-active="true">
                        Novo Prato
                    </a>
                )}

                <a href="#" data-menu-active="true" onClick={handleSignOut}>
                    Sair
                </a>
            </Nav>
            <FixedFooter>
                <Footer></Footer>
            </FixedFooter>
        </Container>
    );
}
