import React, { useState } from "react";
import Slider from "react-slick";
import TextField, { Input } from "@material/react-text-field/dist/index";
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, carousel, Carousel } from "./styles";
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import MaterialIcon from '@material/react-material-icon';
import { Card, RestaurantCard } from "../../components";

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label="Pesquisar"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}>
                        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                        <Card photo={restaurante} title="nome do restaurante" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
        </Wrapper>
    );
};

export default Home;