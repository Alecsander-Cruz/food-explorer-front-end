import { useEffect, useState } from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function Input({ icon: Icon, handleSearchData, ...rest }) {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        handleSearchData(search);
        navigate(`/?search=${search}`);
        location.reload();
    }

    useEffect(() => {
        if (handleSearchData) {
            handleSearchData(search);
        }
    }, [search]);

    return (
        <Container onChange={e => setSearch(e.target.value)}>
            {Icon && (
                <button onClick={handleSearch}>
                    <Icon />
                </button>
            )}
            <input {...rest} />
        </Container>
    );
}
