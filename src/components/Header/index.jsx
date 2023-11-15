import { Container, Counter, Menu } from "./styles";
import { SlMenu } from "react-icons/sl";
import { MdHexagon } from "react-icons/md";
import { PiReceipt } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Search } from "../Search";

export function Header({ onOpenMenu }) {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/");
        signOut();
    }

    return (
        <Container>
            <Menu onClick={onOpenMenu}>
                <SlMenu className="menu" />
            </Menu>

            <div className="logo">
                <MdHexagon />
                <strong>food explorer</strong>
            </div>

            <div className="div-search">
                <Search />
            </div>

            <button className="orders">
                <PiReceipt />
                <Counter>
                    <span>0</span>
                    <p>Pedidos (0)</p>
                </Counter>
            </button>
            <button className="logout" onClick={handleSignOut}>
                <CiLogout />
            </button>
        </Container>
    );
}
