import React, { useState } from "react";
import { H2 } from "../components/Headings";

const IndexCards = ({ pasos }) => {

    const [activeStep, setActiveStep] = useState(0);

    return (
        <>
            <div className="flex text-left h-96 gap-16 ts:h-full ts:max-w-cxxs m-auto w-full">
                <div className="w-full">
                    {pasos.map((step, i) => {
                        return (
                            <div>
                                <p className="text-tiny font-semibold text-purple uppercase">{step.step}</p>
                                <div className={`w-full p-4 rounded-2xl mb-4 transition-all
                                ${(activeStep === i) ? "bg-purple-10 text-purple" : "bg-gray-5 hover:bg-gray-10 hover:text-dark-purple"}
                                `}
                                    onClick={() => setActiveStep(i)}
                                >
                                    <p className="font-krub text-3xl font-medium
                                    tl:text-2xl
                                    ts:text-xl
                                    ms:text-lg
                                    ">{step.title}</p>

                                    {(activeStep === i)
                                        && <div className="hidden ts:block">
                                            <img src={step.img} className="w-full h-48 rounded-2xl object-cover my-4" />
                                            <p className="text-base text-gray-60">{step.description}</p>
                                        </div>}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full p-4 ts:hidden">
                    <img src={pasos[activeStep].img} className="w-full h-72 rounded-2xl object-cover" />
                    <p className="text-base text-gray-60 mt-4">{pasos[activeStep].description}</p>
                </div>
            </div>
        </>
    );
}

export default IndexCards;
