"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useState } from "react";

const Header = () => {
  const [activeNavBar, setActiveNavBar] = useState(false);
  const navLinks = [
    { url: "/", text: "HOME" },
    { url: "/#about", text: "ABOUT" },
    { url: "/pages/gallery", text: "GALLERY" },
    { url: "/pages/platform", text: "PLATFORM" },
    { url: "/pages/catalog", text: "CATALOG" },
    { url: "/pages/contacts", text: "CONTACTS" },
  ];

  const segments = useSelectedLayoutSegments();
  let headerColors = { bg: "", text: "" };
  if (!segments.length) {
    headerColors.bg = "bg-light";
    headerColors.text = "text-dark";
  } else if (segments.includes("catalog") && segments.indexOf("catalog") !== segments.length - 1) {
    headerColors.bg = "bg-light";
    headerColors.text = "text-dark";
  } else {
    headerColors.bg = "bg-dark";
    headerColors.text = "text-light";
  }

  const mobileNavBarStyle = activeNavBar ? "max-md:left-0" : "max-md:left-minusScreenW";

  return (
    <IconContext.Provider value={{ size: "38px" }}>
      <header
        className={`h-60 ${headerColors.bg} ${headerColors.text} flex flex-col items-center max-md:text-dark max-md:h-[306px]`}
      >
        <FaBars
          className={`mt-19 md:hidden self-start ml-7 ${headerColors.text} cursor-pointer`}
          onClick={() => setActiveNavBar(true)}
        />
        <Image src="/logo.png" width={243} height={87} alt="logo" priority={true} className="mt-14" />
        <nav
          className={`flex justify-between w-full md:mt-8 mb-11 px-7 max-w-972 font-bold max-md:absolute max-md:flex-col max-md:h-screen max-md:bg-light max-md:justify-start max-md:pt-19 ${mobileNavBarStyle} ease-in-out duration-300 z-50`}
        >
          <FaXmark className="md:hidden cursor-pointer" onClick={() => setActiveNavBar(false)} />
          {navLinks.map((navLink) => {
            let isActive = segments.includes(navLink.text.toLocaleLowerCase());
            if (segments.length === 0 && navLink.text === "HOME") isActive = true;
            const activeLinkStyle = isActive ? "underline" : "no-underline";
            return (
              <Link
                href={navLink.url}
                key={navLink.text}
                className={`${activeLinkStyle} max-md:mt-5`}
                onClick={() => setActiveNavBar(false)}
              >
                {navLink.text}
              </Link>
            );
          })}
        </nav>
      </header>
    </IconContext.Provider>
  );
};

export default Header;
