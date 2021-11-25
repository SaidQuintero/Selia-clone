import React from "react";
import { ContainerS } from "../components/Containers";
import { H4 } from "../components/Headings";
import ES from "../assets/images/Spain.svg"
import logo from "../assets/Logotipo.svg"

const Footer = () => {


    return (
        <>
            <ContainerS styleOut="bg-gray-5" style="gap-8 text-left text-sm ">
                <div className="w-full flex flex-col gap-6 items-start">
                    <img src={logo} alt="" />
                    <p>+57 304 3225596 <br />
                        Hola@selia.co</p>
                    <div className=" p-2 flex gap-2 bg-purple-5 font-semibold text-purple rounded-lg" >
                        <img src={ES} alt="spain image" height="24" />
                        <p>ES</p>
                    </div>

                    <p>2021 Selia ™ All rights reserved</p>
                </div>
                <div className="w-full">
                    <ul className="flex flex-col gap-2">
                        <li className="text-tiny font-bold">Selia</li>
                        <a href="">Legal</a>
                        <a href="">Habla con soporte</a>
                        <a href="">Iniciar sesión</a>
                        <a href="">Registrarme</a>
                    </ul>
                </div>
                <div className="w-full">
                    <ul className="flex flex-col gap-2">
                        <li className="text-tiny font-bold">Servicios</li>
                        <a href="">Orientacion</a>
                        <a href="">Primer encuentro</a>
                        <a href="">Terapia individual</a>
                        <a href="">Terapia de pareja</a>
                    </ul>
                </div>
                <div className="w-full">

                </div>
            </ContainerS>
            <ContainerS styleOut="bg-gray-10">
                <p>Si tú o alguien que conoces está experimentando una emergencia o una crisis y necesita ayuda inmediata, llama a la línea 192 opción 4 (en Colombia) o dirígete a la sala de emergencia más cercana. Encuentra recursos adicionales para crisis
                <a href="" className="font-bold text-purple"> aquí</a></p>
               
            </ContainerS>
        </>
    );
}

export default Footer;
