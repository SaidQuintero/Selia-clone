import React from "react";
import { BtnPrimary, BtnSecondary } from "../components/Buttons"
import { H2 } from "../components/Headings";
import { ContainerS } from "../components/Containers";
import ServiceCard from "../components/ServiceCard";
import orientacion from "../assets/images/Orientaciín.png";
import terapiaIndividual from "../assets/images/Terapia individual icon.svg";
import terapiaPareja from "../assets/images/Terapie de pareja icon.svg";

const NuestrosServicios = () => {
    return (
        <>
            <ContainerS style="flex-col gap-12 items-center
            ml:flex-col ts:gap-8
            ">
                <H2>Nuestros servicios</H2>
                <div className="flex justify-center gap-4 w-full
                ts:flex-col ts:max-w-cxxs
                ">
                    <ServiceCard 
                        icon={orientacion}
                        title={"Orientacion"}
                        text={"Escucharemos tus necesidades, te explicaremos cómo te puede ayudar la terapia y encontraremos a tu especialista ideal."}
                    />
                    <ServiceCard 
                        icon={terapiaIndividual}
                        title={"Terapia individual"}
                        text={"Aprenderás habilidades y herramientas para hacer frente a las situaciones que se presenten en tu vida."}
                    />
                    <ServiceCard 
                        icon={terapiaPareja}
                        title={"Terapia de pareja"}
                        text={"Construirán conocimiento sobre ambos, como persona y pareja. Trabajarán en habilidades y herramientas para la relación."}
                    />
                </div>
                <div className="flex justify-center gap-4 w-full ml:flex-col ml:items-center">
                    <BtnPrimary />
                    <BtnSecondary>Como funciona</BtnSecondary>
                </div>
            </ContainerS>
        </>
    );
}

export default NuestrosServicios;
