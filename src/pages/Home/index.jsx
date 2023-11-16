import { Container, Content, FixedHeader, FixedFooter } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";
import { useState, useRef } from "react";

import foodsMobile from "../../assets/foodsMobile.svg";
import foodsDesktop from "../../assets/foodsDesktop.svg";

import { USER_ROLE } from "../../utils/roles";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free",
        slides: {
            perView: 1.5,
            spacing: 16
        }
    });

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
            />
            <FixedHeader>
                <Header onOpenMenu={() => setMenuIsOpen(true)} />
            </FixedHeader>
            <Content>
                <section className="banner">
                    <img
                        className="foodsMobile"
                        src={foodsMobile}
                        alt="Imagem de comidas"
                    />
                    <img
                        className="foodsDesktop"
                        src={foodsDesktop}
                        alt="Imagem de comidas"
                    />
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>
                            Sinta o cuidado do preparo com ingredientes
                            selecionados.
                        </p>
                    </div>
                </section>
                <section className="meals">
                    <h1>Refeições</h1>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            1
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            2
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            3
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            4
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            5
                        </div>
                        <div className="keen-slider__slide number-slide6">
                            6
                        </div>
                    </div>
                </section>
                <section className="desserts">
                    <h1>Sobremesas</h1>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            1
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            2
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            3
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            4
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            5
                        </div>
                        <div className="keen-slider__slide number-slide6">
                            6
                        </div>
                    </div>
                </section>
                <section className="drinks">
                    <h1>Bebidas</h1>
                    <div ref={sliderRef} className="keen-slider">
                        <div className="keen-slider__slide number-slide1">
                            1
                        </div>
                        <div className="keen-slider__slide number-slide2">
                            2
                        </div>
                        <div className="keen-slider__slide number-slide3">
                            3
                        </div>
                        <div className="keen-slider__slide number-slide4">
                            4
                        </div>
                        <div className="keen-slider__slide number-slide5">
                            5
                        </div>
                        <div className="keen-slider__slide number-slide6">
                            6
                        </div>
                    </div>
                </section>
            </Content>
            <FixedFooter>
                <Footer />
            </FixedFooter>
        </Container>
    );
}
