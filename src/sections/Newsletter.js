import React from "react";
import { ContainerS } from "../components/Containers";
import { H4 } from "../components/Headings";

const Newsletter = () => {


    return (
        <>
            <ContainerS styleOut="bg-gradient-two" style="gap-8 items-center text-left ts:flex-col ts:text-center py-12">
                <div className="w-full ">
                    <H4>Suscríbete al newsletter</H4>
                    <p>Descuentos, tips y novedades <br />
                        exclusivas en tu correo</p>
                </div>
                <div className="w-full max-w-cxxs">
                    <form onSubmit="" >
                    <div className="flex items-center relative">
                        <input type="text" placeholder="Escribe tu correo" className="h-14 w-full bg-white border-purple-50 border-2 pr-36 p-4 rounded-2xl
                         focus:shadow-spurple focus:ring-purple-50 focus:ring-4 focus:outline-none focus:border-purple
                        " />
                        <button type="submit" className="h-10 px-4 bg-purple-20 border-2 border-purple-50 text-purple absolute rounded-xl shadow-spurple right-2">Suscribirme</button>
                    </div>
                    <label><input type="checkbox" id="cbox1" value="first_checkbox"
                        className="mt-4 mr-2"
                    /> Acepto los <a className=" font-bold">terminos y condiciones</a></label>
                    </form>
                </div>
            </ContainerS>
        </>
    );
}

export default Newsletter;
