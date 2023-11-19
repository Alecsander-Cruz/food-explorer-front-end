import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && (
                <button>
                    <Icon />
                </button>
            )}
            <input {...rest} />
        </Container>
    );
}
