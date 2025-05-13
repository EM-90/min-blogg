"use client"; // This makes HeaderImage a client component

import { usePathname } from "next/navigation";

const HeaderImage = () => {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const getHeaderImage = () => {
    switch (pathname) {
      case "/":
        return "/header-home.svg";
      case "/articles":
        return "/header-articles.svg";
      case "/contact":
        return "/header-contact.svg";
      case "/guides":
        return "/header-guides.svg";
      case "/about":
        return "/header-about.svg";
      default:
        return "/header-articles.svg";
    }
  };

  return (
    <img
      src={getHeaderImage()}
      alt="Header Image"
      className="w-full absolute top-0 bg-cover"
    />
  );
};

export default HeaderImage;
