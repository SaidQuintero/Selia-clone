import React from "react";
import { BtnPrimary } from "../components/Buttons";
import { RightBenefitCard, BenefitCard } from "../components/BenefitsCards";
import img from "../assets/images/benefit.png";
import iconArrow from "../assets/images/Arrow.svg";


const Beneficios = () => {

    const benefits = [
        {
            icon: iconArrow,
            text: "Acompañamiento para escoger al especialista que más se adapte a ti.",
        },
        {
            icon: iconArrow,
            text: "Acceso a profesionales certificados.",
        },
        {
            icon: iconArrow,
            text: "Flexibilidad de costos, métodos de pago y horarios a tu medida.",
        },
        {
            icon: iconArrow,
            text: "Disponible desde cualquier lugar del mundo.",
        },
        {
            icon: iconArrow,
            text: "Acceso a Selia desde tu dispositivo móvil.",
        },
    ]

    return (
        <>
            <RightBenefitCard img={img} alt={"foto de hombre"}>
                <BenefitCard list={benefits} title={"Benficios"}>
                    <BtnPrimary />
                </BenefitCard>
            </RightBenefitCard>
        </>
    );
}

export default Beneficios;
