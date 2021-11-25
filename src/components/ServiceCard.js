import React from "react";
import { BtnPrimary, BtnSecondary } from "../components/Buttons"
import { H4 } from "../components/Headings";
import { ContainerS } from "../components/Containers";

const ServiceCard = ({ icon, alt, title, text, href }) => {
    return (
        <div className="flex flex-col gap-4 w-full p-6 bg-purple-10 border-2 border-purple-50 rounded-2xl text-left">
            <div className="flex flex-col gap-4 ts:flex-row ts:items-center">
                <img src={icon} alt={alt} className="w-14 ts:w-10" />
                <H4>{title}</H4>
            </div>
            <p className="body-text">{text}</p>
            <div className="w-full h-0.5 bg-purple-50"></div>
            <BtnPrimary href={href} style={"m-auto"}>Ver mas</BtnPrimary>

        </div>
    );
}

export default ServiceCard;
