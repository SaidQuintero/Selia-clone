import React from "react";
import { ContainerS } from "../components/Containers";
import apple from "../assets/images/Apple Store.svg";
import google from "../assets/images/Google play.svg";
import phones from "../assets/images/telephones.png";

const Banner = () => {
    return (
        <>
            <ContainerS 
            style="flex-row gap-12 items-center text-left shadow-spurple rounded-2xl my-8 px-8
            ts:gap-8
            ml:flex-col ml:text-center ml:py-4 ml:max-w-cxxs
            ">
               <div className="w-full">
                   <h2 className="font-krub font-medium text-5xl ts:text-3xl ms:text-xl">Disfruta de Selia en <br />
                   tu dispositivo movil</h2>
                   <div className="flex flex-row gap-4 mt-4 ml:justify-center">
                       <img src={apple} alt="" width="135" />
                       <img src={google} alt="" width="135" />
                   </div>
               </div>
               <div className="w-full  ml:hidden">
                   <img src={phones} alt="" />
               </div>
            </ContainerS>
        </>
    );
}

export default Banner;
