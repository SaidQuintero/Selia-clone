import React from "react";

export const H1 = ({children, style}) => {
    return (
      <h1 className={`
        ${style}
        text-black font-bold font-krub text-7xl
        tl:text-6xl ts:text-5xl ml:text-3xl ms:text-2xl
        `} >
          {children}
      </h1>
    );
}

export const H2 = ({children, style}) => {
    return (
      <h1 className={`
        ${style}
        text-black font-bold font-krub text-6xl
        tl:text-5xl ts:text-3xl ml:text-2xl ms:text-1xl
        `} >
          {children}
      </h1>
    );
}

export const H4 = ({children, style}) => {
    return (
      <h1 className={`
        ${style}
        text-black font-bold font-krub text-2xl
        ml:text-xl ms:text-lg
        `} >
          {children}
      </h1>
    );
}
