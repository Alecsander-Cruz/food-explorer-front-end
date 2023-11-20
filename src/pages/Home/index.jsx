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
import { useSearchParams } from "react-router-dom";

export function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search"));

    function handleSetSearch(data) {
        setSearch(data);
    }

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

    function callResizeEvent() {
        window.dispatchEvent(new Event("resize"));
    }

    useEffect(() => {
        setTimeout(() => {
            callResizeEvent();
        }, 300);
    }, [search]);

    // SLIDER

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [dishes, setDishes] = useState([]);

    async function fetchDishes() {
        if (search === null) {
            const response = await api.get(`/dishes?name&ingredients`, {
                withCredentials: true
            });
            setDishes(response.data);
        } else {
            const responseName = await api.get(
                `/dishes?name=${search}&ingredients`,
                {
                    withCredentials: true
                }
            );

            const responseIngredient = await api.get(
                `/dishes?name&ingredients=${search}`,
                {
                    withCredentials: true
                }
            );

            const arrayIngredientsId = responseIngredient.data.map(
                ingredient => ingredient.id
            );

            const fetchedIngredients = [];

            for (let i = 0; i < arrayIngredientsId.length; i++) {
                const response = await api.get(
                    `/dishes/${arrayIngredientsId[i]}`,
                    { withCredentials: true }
                );

                fetchedIngredients.push(response.data);
            }

            let allDishes = [...responseName.data];
            const allDishesId = allDishes.map(dish => dish.id);

            const intersec = fetchedIngredients.filter(
                dish => !allDishesId.includes(dish.id)
            );

            allDishes = [...allDishes, ...intersec];

            setDishes(allDishes);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchDishes();
        }, 300);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            fetchDishes();
        }, 100);
    }, [search]);

    return (
        <Container>
            <SideMenu
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)}
                handleSearchData={handleSetSearch}
            />
            <FixedHeader>
                <Header
                    onOpenMenu={() => setMenuIsOpen(true)}
                    handleSearchData={handleSetSearch}
                />
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
                    {dishes &&
                        (dishes.filter(dish => dish.category === "refeicao")
                            .length !== 0 ? (
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
                            </div>
                        ) : (
                            <h1>Nenhuma refeição foi encontrada</h1>
                        ))}
                </section>
                <section className="desserts">
                    <h1>Sobremesas</h1>
                    {dishes &&
                        (dishes.filter(dish => dish.category === "sobremesa")
                            .length !== 0 ? (
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
                        ) : (
                            <h1>Nenhuma sobremesa foi encontrada!</h1>
                        ))}
                </section>
                <section className="drinks">
                    <h1>Bebidas</h1>
                    {dishes &&
                        (dishes.filter(dish => dish.category === "bebida")
                            .length !== 0 ? (
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
                        ) : (
                            <h1>Nenhuma bebida foi encontrada!</h1>
                        ))}
                </section>
            </Content>
            <FixedFooter>
                <Footer />
            </FixedFooter>
        </Container>
    );
}
