import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Hexagon from "../../assets/hexagon.svg";

import { Container, Form } from "./styles";
import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        if (password.length < 6) {
            return alert("A senha precisa ter no mínimo 6 caracteres!");
        }

        api.post("/users", { name, email, password }, { withCredentials: true })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar!");
                }
            });
    }

    return (
        <Container>
            <div>
                <img src={Hexagon} alt="Ícone de um hexagono" />
                <h1>food explorer</h1>
            </div>
            <Form>
                <h2>Crie sua conta</h2>
                <p>Seu nome</p>
                <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />
                <p>Email</p>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />

                <p>Senha</p>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="text"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title={"Criar conta"} onClick={handleSignUp} />
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    );
}
