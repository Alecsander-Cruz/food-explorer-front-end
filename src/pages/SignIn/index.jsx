import { Link } from "react-router-dom";
import { useState } from "react";

import Hexagon from "../../assets/hexagon.svg";

import { Container, Form } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <div>
                <img src={Hexagon} alt="Ícone de um hexagono" />
                <h1>food explorer</h1>
            </div>
            <Form>
                <h2>Faça Login</h2>
                <p>Email</p>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />

                <p>Senha</p>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title={"Entrar"} onClick={handleSignIn} />
                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    );
}
