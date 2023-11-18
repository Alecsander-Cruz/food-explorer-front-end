import { Container } from "./styles";

export function Input({ type = "text", icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && (
                <button>
                    <Icon />
                </button>
            )}
            <input type={type} {...rest} />
        </Container>
    );
}
