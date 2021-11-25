import React from "react";
import { BtnPrimary } from "../components/Buttons"
import { H1 } from "../components/Headings";
import { ContainerL } from "../components/Containers";
import heroImage from "../assets/images/home-banner.png"
import arrow from "../assets/images/Arrow.svg"

const HeroHome = () => {
    return (
        <>
            <ContainerL style="text-left gap-4 items-center mt-20
            ml:flex-col-reverse ml:text-center
            ">
                <div className="w-full">
                    <H1>Empieza terapia<br />
                        en línea hoy</H1>
                    <p className="text-xl my-10
                    tl:text-lg tl:my-6
                    ml:my-4
                    ms:text-tiny
                    " >
                        Encuentra tu psicólogo ideal e inicia <br />
                        tu camino de bienestar desde cualquier lugar</p>
                    <BtnPrimary />
                </div>
                <div className="w-full
                ml:max-w-xxs
                ">
                    <img src={heroImage} alt="hero image" />
                </div>
            </ContainerL>
            <img src={arrow} alt="flechita" className="m-auto"/>
        </>
    );
}

export default HeroHome;
