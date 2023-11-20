import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";
import { useEffect, useState } from "react";

export function Search({ handleSearchData }) {
    const [searching, setSearching] = useState("");

    function handleSetSearch(data) {
        setSearching(data);
    }

    useEffect(() => {
        handleSetSearch(searching);
        if (handleSearchData) {
            handleSearchData(searching);
        }
    }, [searching]);

    return (
        <Container>
            <Input
                handleSearchData={handleSearchData}
                icon={FiSearch}
                type="text"
                placeholder="Busque por pratos ou ingredientes"
                onChange={e => setSearching(e.target.value)}
            />
        </Container>
    );
}
