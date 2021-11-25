import React from "react";
import { H2 } from "../components/Headings";
import { BtnPrimary } from "../components/Buttons";
import { ContainerL } from "../components/Containers";
import img from "../assets/images/specialist-by-selia.png";
import iconArrow from "../assets/images/Arrow.svg";

const Beneficios = () => {

    return (
        <>
            <ContainerL styleOut="bg-purple-10 py-8" style="items-center flex-col gap-14">
                <div className="flex gap-12 ml:flex-col-reverse ">
                    
                    <div className="floating-container text-left flex flex-col gap-4
                     ml:text-center
                     ">
                        <H2>Nuestros <br />
                            Especialistas</H2>
                        <p>En Selia contamos con especialistas en salud mental calificados para ayudarte a encontrar herramientas para trabajar:</p>

                        {/* Lista de sintomas  */}
                        <div className="flex">
                            <div className="flex flex-col gap-2 w-full">
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    <img src={iconArrow} height="24" />
                                    <p>Ansiedad</p>
                                </div>
                                <div className="text-left flex items-center gap-2">
                                    {/* <img src={iconArrow} height="24" /> */}
                                    <p>Ansiedad</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="w-full">
                        <img src={img} alt="nuestros especialistas" className="h-full object-cover m-auto
                        ml:h-96
                        "/>
                    </div>

                </div>
                <BtnPrimary />
            </ContainerL>
        </>
    );
}

export default Beneficios;
