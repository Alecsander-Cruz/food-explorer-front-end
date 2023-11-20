import {
    Container,
    Counter,
    Menu,
    LogoAdmin,
    LogoCustomer,
    NewDish,
    Orders,
    Logout
} from "./styles";
import { SlMenu } from "react-icons/sl";
import { MdHexagon } from "react-icons/md";
import { PiReceipt } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Search } from "../Search";

import { USER_ROLE } from "../../utils/roles.js";
import { useEffect, useState } from "react";

export function Header({ onOpenMenu, handleSearchData }) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    function handleLogo() {
        setSearch("");
        navigate("/");
        location.reload();
    }

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    function handleNewDish() {
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
        <Container>
            <Menu onClick={onOpenMenu}>
                <SlMenu className="menu" />
            </Menu>

            {[USER_ROLE.ADMIN].includes(user.role) && (
                <LogoAdmin onClick={handleLogo}>
                    <MdHexagon />
                    <div>
                        <strong>food explorer</strong>
                        <span>admin</span>
                    </div>
                </LogoAdmin>
            )}

            {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <LogoCustomer onClick={handleLogo}>
                    <MdHexagon />
                    <strong>food explorer</strong>
                </LogoCustomer>
            )}

            <div className="div-search">
                <Search handleSearchData={handleSetSearch} />
            </div>

            {[USER_ROLE.ADMIN].includes(user.role) && (
                <NewDish onClick={handleNewDish}>Novo prato</NewDish>
            )}

            {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <Orders>
                    <PiReceipt />
                    <Counter>
                        <span>0</span>
                        <p>Pedidos (0)</p>
                    </Counter>
                </Orders>
            )}

            <Logout onClick={handleSignOut}>
                <CiLogout />
            </Logout>
        </Container>
    );
}
