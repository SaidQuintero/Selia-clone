import React from "react";
import { ContainerL } from "../components/Containers";
import { H2 } from "../components/Headings";
import { BtnPrimary } from "../components/Buttons";
import IndexCards from "../components/IndexCards";
import paso1img from "../assets/images/paso-1.png"
import paso2img from "../assets/images/paso-2.jpg"
import paso3img from "../assets/images/paso-3.png"

const ComoFunciona = () => {

    const pasos = [
        {
            step: "PASO 1",
            title: "Encuentra a tu especialista ideal",
            img: paso1img,
            description: "Cuéntanos tus necesidades y motivo de consulta"
        },
        {
            step: "PASO 2",
            title: "Conoce a tu especialista",
            img: paso2img,
            description: "Agenda tu primer encuentro de 30 minutos con tu psicólogo, cuéntale qué quieres trabajar y lleguen a acuerdos para tu proceso"
        },
        {
            step: "PASO 3",
            title: "Inicia tu camino de bienestar",
            img: paso3img,
            description: "Explora Selia y sus beneficios creados especialmente para ti"
        },
    ]

    return (
        <>
            <ContainerL style="flex-col gap-8 items-center">
                <H2>Como funciona Selia</H2>
                <IndexCards pasos={pasos} />
                <BtnPrimary />
            </ContainerL>
        </>
    );
}

export default ComoFunciona;
