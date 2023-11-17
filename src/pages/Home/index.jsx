import { Container, Content, FixedHeader, FixedFooter } from "./styles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { SideMenu } from "../../components/SideMenu";
import { DishCard } from "../../components/DishCard";

import { useState, useEffect } from "react";

import foodsMobile from "../../assets/foodsMobile.svg";
import foodsDesktop from "../../assets/foodsDesktop.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { api } from "../../services/api";

export function Home() {
    // SLIDER
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free",
        centered: true,
        slides: {
            perView: 1.5,
            spacing: 16
        },
        breakpoints: {
            "(min-width: 700px)": {
                slides: {
                    perView: 2.5,
                    spacing: 16
                }
            },
            "(min-width: 1024px)": {
                slides: {
                    perView: 3.5,
                    spacing: 27
                }
            }
        }
    });

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 100);
    }, []);

    // SLIDER

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?name&ingredients`, {
                withCredentials: true
            });
            setDishes(response.data);
        }

        fetchDishes();
    }, [dishes]);

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
                    {dishes && (
                        <div ref={sliderRef} className="keen-slider">
                            {dishes.map(dish => {
                                if (dish.category === "refeicao") {
                                    return (
                                        <div
                                            className="keen-slider__slide"
                                            key={String(dish.id)}
                                        >
                                            <DishCard
                                                key={String(dish.id)}
                                                data={dish}
                                            />
                                        </div>
                                    );
                                }
                            })}
                            <div className="keen-slider__slide" key={String(1)}>
                                <DishCard
                                    key={String(1)}
                                    data={{
                                        id: 1,
                                        name: "Ovo com Kitute",
                                        category: "refeicao",
                                        price: "15,00",
                                        description: "ovo frito com kitute"
                                    }}
                                />
                            </div>
                            <div className="keen-slider__slide" key={String(2)}>
                                <DishCard
                                    key={String(2)}
                                    data={{
                                        id: 2,
                                        name: "Ovo com Kitute",
                                        category: "refeicao",
                                        price: "15,00",
                                        description: "ovo frito com kitute",
                                        photo: null
                                    }}
                                />
                            </div>
                            <div className="keen-slider__slide" key={String(3)}>
                                <DishCard
                                    key={String(3)}
                                    data={{
                                        id: 3,
                                        name: "Ovo com Kitute",
                                        category: "refeicao",
                                        price: "15,00",
                                        description: "ovo frito com kitute",
                                        photo: null
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </section>
                <section className="desserts">
                    <h1>Sobremesas</h1>
                    {dishes && (
                        <div ref={sliderRef} className="keen-slider">
                            {dishes.map(dish => {
                                if (dish.category === "sobremesa") {
                                    return (
                                        <div
                                            className="keen-slider__slide"
                                            key={String(dish.id)}
                                        >
                                            <DishCard
                                                key={String(dish.id)}
                                                data={dish}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    )}
                </section>
                <section className="drinks">
                    <h1>Bebidas</h1>
                    {dishes && (
                        <div ref={sliderRef} className="keen-slider">
                            {dishes.map(dish => {
                                if (dish.category === "bebida") {
                                    return (
                                        <div
                                            className="keen-slider__slide"
                                            key={String(dish.id)}
                                        >
                                            <DishCard
                                                key={String(dish.id)}
                                                data={dish}
                                            />
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    )}
                </section>
            </Content>
            <FixedFooter>
                <Footer />
            </FixedFooter>
        </Container>
    );
}
