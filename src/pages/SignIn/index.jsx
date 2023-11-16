import { Link } from "react-router-dom";
import { useState } from "react";

import Hexagon from "../../assets/hexagon.svg";
import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { signIn } = useAuth();

    function handleSignIn() {
        if (email && password) {
            signIn({ email, password });
        } else {
            return alert(
                "Os campos precisam ser preenchidos para efetuar o login!"
            );
        }
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
