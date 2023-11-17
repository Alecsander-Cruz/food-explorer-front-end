import { Container } from "./styles";

export function IngredientTag({ name, ...rest }) {
    return <Container {...rest}>{name}</Container>;
}
