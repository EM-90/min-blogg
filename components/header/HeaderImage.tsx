"use client"; // This makes HeaderImage a client component

import { usePathname } from "next/navigation";

const HeaderImage = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const getHeaderImage = () => {
    switch (pathname) {
      case "/":
        return "/header-bg-home.svg";
      case "/articles":
        return "/header-inklusign-artikler.svg";
      case "/kontakt":
        return "/header-inklusign-kontakt.svg";
      case "/annet":
        return "/header-inklusign-annet.svg";
      case "/om":
        return "/header-inklusign-om.svg";
      default:
        return "/header-inklusign-artikler.svg";
    }
  };

  return (
    <img
      src={getHeaderImage()}
      alt=""
      className="w-full absolute top-0 bg-cover hidden md:block"
    />
  );
};

export default HeaderImage;
