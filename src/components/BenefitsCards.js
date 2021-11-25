import React from "react";
import { ContainerL } from "../components/Containers";
import { H2 } from "../components/Headings";

export const RightBenefitCard = ({ img, alt, children }) => {

    return (
        <>
            <ContainerL>
                <div className="relative flex items-center h-xl w-full text-left
                ml:flex-col 
                ">
                    <img src={img} alt={alt} className="w-4/5 h-full rounded-4 object-cover absolute
                    ml:w-full ml:h-80 ml:relative
                    " />
                    <div className="w-full max-w-cxxs p-12 bg-white-blur border-2 border-purple-50 rounded-2xl absolute right-0
                    tl:p-8
                    ml:relative ml:-mt-36 ml:w-11/12
                    ms:p-4
                    ">
                        {children}
                    </div>
                </div>
            </ContainerL>
        </>
    );
}

export const LeftBenefitCard = ({ img, alt, children }) => {

    return (
        <>
            <ContainerL>
                <div className="relative flex items-center h-xl w-full text-left
                ml:flex-col 
                ">
                    <img src={img} alt={alt} className="w-4/5 h-full rounded-4 object-cover absolute right-0
                    ml:w-full ml:h-80 ml:relative
                    " />
                    <div className="w-full max-w-cxxs p-12 border-2 border-purple-50 rounded-2xl absolute left-0
                    tl:p-8
                    ml:relative ml:-mt-36 ml:w-11/12
                    ms:p-4
                    ">
                        {children}
                    </div>
                </div>
            </ContainerL>
        </>
    );
}

export const BenefitCard = ({ children, title, list }) => {

    return (
        <>
            <H2 style="ml:text-center">{title}</H2>
            <div className="my-6">
                {list.map((item, i) => {
                    return (
                        <div className="flex gap-4 mb-6">
                            <img src={item.icon} height="40" />
                            <div className="border-b-2 border-purple-50 w-full pb-2">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center justify-center w-full mt-12">
                {children}
            </div>
        </>
    );
}

