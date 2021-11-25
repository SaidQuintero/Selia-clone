import React from "react";

export const BtnPrimary = ({children, href, style}) => {
    return (
      <button
      type="button"
      href={href}
      className={` ${style}
      font-open font-bold text-white text-lg
      bg-purple px-4 h-13 w-full max-w-xxs rounded-lg shadow-spurple
      focus:ring-4 focus:ring-purple-20 focus:bg-purple-50 focus:text-dark-purple
      transition-all
      ml:text-base
      ms:text-tiny`}
      >{children ? children : "Empieza ahora"}</button>
    );
}

export const BtnPrimaryNav = ({children, href}) => {
    return (
      <button
      type="button"
      href={href}
      className="font-open font-bold text-white text-tiny
      bg-purple  px-6 h-12 rounded-lg shadow-spurple
      hover:bg-dark-purple hover:text-purple-20 
      focus:ring-4 focus:ring-purple-20 focus:bg-purple-50 focus:text-dark-purple
      transition-all"
      >{children}</button>
    );
}

export const BtnSecondary = ({children, href}) => {
    return (
      <button
    type="button"
    href={href}
    className="font-open font-bold text-purple text-lg
      border-purple border-2 px-4 h-13 w-full max-w-xxs rounded-lg
      hover:border-dark-purple hover:text-dark-purple hover:bg-purple-20 transition-all
      ml:text-base
      ms:text-tiny"
    >{children}</button>
    );
}

export const BtnSecondaryNav = ({children, href}) => {
  return (
    <button
    type="button"
    href={href}
    className="font-open font-bold text-purple text-tiny
      border-purple border-2 px-6 h-12 rounded-lg
      hover:border-dark-purple hover:text-dark-purple hover:bg-purple-20 transition-all"
    >{children}</button>
  );
}

export const BtnIconOutline = ({children, href, style}) => {
  return (
    <button
    type="button"
    href={href}
    className={` ${style}
      font-open text-purple
      border-purple border-2 p-3 rounded-lg
      hover:border-dark-purple hover:text-dark-purple hover:bg-purple-20 transition-all`}
    >{children}</button>
  );
}
