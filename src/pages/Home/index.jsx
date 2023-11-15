import { Container, Content, FixedHeader, FixedFooter } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";
import { useState } from "react";

export function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <FixedHeader>
                <Header onOpenMenu={() => setMenuIsOpen(true)} />
            </FixedHeader>
            <Content></Content>
            <FixedFooter>
                <Footer />
            </FixedFooter>
        </Container>
    );
}
