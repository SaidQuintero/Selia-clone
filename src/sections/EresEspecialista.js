import React from "react";
import { ContainerS } from "../components/Containers";
import { H2 } from "../components/Headings";
import { BtnSecondary } from "../components/Buttons";
import img from "../assets/images/specialist-alt.png"

const EresEspecialista = () => {


    return (
        <>
            <ContainerS styleOut={"py-20"} style="items-center">
                <div className=" bg-white border-2 border-purple-50 text-left flex rounded-2xl overflow-hidden shadow-sgray">
                    <div className="w-full p-12 flex flex-col gap-4">
                        <H2>Eres especialista</H2>
                        <p>Selia te proporciona todas las herramientas para que puedas desarrollar tu práctica privada y administrar tu propio consultorio virtual, atendiendo a tus pacientes en los horarios de tu preferencia.</p>
                        <BtnSecondary>Unirme ahora</BtnSecondary>
                    </div>
                    <div className="w-full">
                        <img src={img} alt="nuestros especialistas" className="h-full object-cover" />
                    </div>

                </div>
            </ContainerS>
        </>
    );
}

export default EresEspecialista;