import React, { useState, useEffect } from "react";
import { BtnPrimary, BtnPrimaryNav, BtnSecondary, BtnSecondaryNav, BtnIconOutline } from "../components/Buttons"
import { ContainerL } from "../components/Containers";
import logo from "../assets/logo_with_name.svg"
import burgerMenu from "../assets/images/Burger menu.svg"
import close from "../assets/images/Close.svg"


const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [nav, setNav] = useState(false);

  const openNav = (navState) => {
    setNav(!navState);
    console.log("clicked");
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition > 1) {
    console.log(scrollPosition);
  }

  return (
    <>
    {nav && <div className="fixed h-full w-screen bg-white z-50">
        <ul className="flex flex-col gap-8  h-full justify-center" >
          <li className="px-4 text-xl font-semibold">Como funciona</li>
          <li className="px-4 text-xl font-semibold">Nuestros servicios</li>
          <li><BtnSecondary href="#">Iniciar sesion</BtnSecondary></li>
          <li><BtnPrimary href="#">Empieza ahora</BtnPrimary></li>
        </ul>
      </div>}
      <ContainerL styleOut={`fixed w-screen z-40 transition-all duration-1000
      ${(scrollPosition > 80) ? "bg-white" : "bg-white-0"}
      `} style="items-center justify-between">
        <img src={logo} alt="logo selia" width="120" />
        <ul className="flex flex-row gap-4 justify-end items-center ts:hidden" >
          <li className="px-4">Como funciona</li>
          <li className="px-4">Nuestros servicios</li>
          <li><BtnSecondaryNav href="#">Iniciar sesion</BtnSecondaryNav></li>
          <li><BtnPrimaryNav href="#">Empieza ahora</BtnPrimaryNav></li>
        </ul>
        <BtnIconOutline href="#" style={"hidden ts:block z-10"} > <img onClick={() => openNav(nav)} src={ nav ? close : burgerMenu} alt="burger menu" /> </BtnIconOutline>
      </ContainerL>
    </>
  );
}

export default Navbar;