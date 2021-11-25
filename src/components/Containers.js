import React from "react";

export const ContainerL = ({ children, style, styleOut }) => {
    return (
        <div className={`
        ${styleOut}
        flex justify-center
        tl:px-12 ml:px-4
        `} >
            <div className={`
             ${style}
             max-w-cl w-full flex py-6
             `}>
                {children}
            </div>
        </div>
    );
}

export const ContainerS = ({ children, style, styleOut }) => {
    return (
        <div className={`
        ${styleOut}
        flex justify-center py-6
        tl:px-12 ml:px-4
        `} >
            <div className={`
             ${style}
             max-w-cs w-full flex
             `}>
                {children}
            </div>
        </div>
    );
}
