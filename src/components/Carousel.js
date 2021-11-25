import React, { useState, useEffect } from "react";
import { ContainerL } from "../components/Containers";
import quotesMark from "../assets/images/comillas_dobles.svg"

const Carousel = ({ testimonials }) => {


    const numSlides = Math.ceil(testimonials.length / 3);
    const [activeSlide, setActiveSlide] = useState(0)
    const groupedQuotes = []

    for (let i = 0; i < numSlides; i++) {
        const e = i + 3
        const sliced = testimonials.slice(i,e);
        console.log(sliced);
        groupedQuotes.push(sliced)
        console.log(groupedQuotes);
    }

    // const autoPlay = (interval) => {
    //     const rep = setInterval((interval) => {
    //         const newSlide = activeSlide + 1;

    //         console.log(activeSlide);
    //         console.log(numSlides);

    //         if (activeSlide > numSlides) {
    //             clearInterval(rep)
    //             return setActiveSlide(0);
    //         } 
    //         return setActiveSlide(newSlide)

    //     }, interval)

        
    // }

    // useEffect(() => {
    //     autoPlay(3000);
    // }, [autoPlay]);

    return (
        <>
            <ContainerL style="flex-col gap-8">
                <div className="flex flex-row gap-8 text-left flex-1">
                    {groupedQuotes[activeSlide].map((quote) => {
                        return (
                            <div className="p-6 rounded-2xl bg-white w-full h-48 ">
                                <img src={quotesMark} alt="comillas" width="68" className="mb-4" />
                                <p>{quote}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-row gap-4 justify-center ">
                    {groupedQuotes.map((group, i) => {
                        return (
                            <div
                                className={(activeSlide === (i))
                                    ? "w-8 h-4 bg-purple rounded-full transition-all duration-500"
                                    : "w-4 h-4 bg-purple-50 rounded-full transition-all duration-500"}
                                onClick={() => setActiveSlide(i)}>
                            </div>
                        )
                    })}
                </div>
            </ContainerL>
        </>
    );
}

export default Carousel;