import React from "react";
import { ContainerL } from "../components/Containers";
import { H2 } from "../components/Headings";
import Carousel from "../components/Carousel";

const TestimonilsHome = () => {

    const testimonials = [
        "Ustedes cuentan con las mejores profesionales y la ayuda que nos facilitan contribuye a mejorar nuestra salud mental, estamos en las mejores manos, felicitaciones.",
        "Me gusta la inmediatez con el profesional y el acceso virtual a la consulta.",
        "Primera vez haciendo terapia y ¡me encantó! Muy profesionales todos y la plataforma muy buena. Ya la recomendé a mis familiares y amigos.",
        "Me encantó la plataforma, todo es muy organizado y mi especialista me hizo sentir muy cómoda y a gusto.",
        "Muchas gracias por hacer un poco más fácil y democrático el acceso a la ayuda psicológica.",
    ]

    return (
        <>
            <ContainerL styleOut="bg-purple-10" style="flex-col gap-8">
                {/* <H2>Como funciona Selia</H2> */}
                <Carousel testimonials={testimonials} />
            </ContainerL>
        </>
    );
}

export default TestimonilsHome;
