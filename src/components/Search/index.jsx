import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";
import { useState } from "react";

export function Search() {
    const [searching, setSearching] = useState("");

    return (
        <Container>
            <Input
                icon={FiSearch}
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => setSearching(e.target.value)}
            />
        </Container>
    );
}
