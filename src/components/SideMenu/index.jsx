import { Container, Header, Button, Nav, FixedFooter } from "./styles";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Search } from "../Search";
import { Footer } from "../Footer";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles.js";
import { useEffect, useState } from "react";

export function SideMenu({ menuIsOpen, onCloseMenu, handleSearchData }) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleAddDish() {
        navigate("/newdish");
    }

    function handleSetSearch(data) {
        setSearch(data);
    }

    useEffect(() => {
        handleSetSearch(search);
        if (handleSearchData) {
            handleSearchData(search);
        }
    }, [search]);

    return (
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <Button onClick={onCloseMenu}>
                    <FiX />
                </Button>
                <h1>Menu</h1>
            </Header>
            <Nav>
                <Search handleSearchData={handleSetSearch} />
                {[USER_ROLE.ADMIN].includes(user.role) && (
                    <a href="#" data-menu-active="true" onClick={handleAddDish}>
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
