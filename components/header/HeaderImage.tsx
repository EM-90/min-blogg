"use client";
import { usePathname } from "next/navigation";

const HeaderImage = () => {
  const pathname = usePathname();
  const hideHeader = pathname.startsWith("/articles/");

  if (hideHeader) {
    return null;
  }
  return (
    <img
      src="/header-bg-home.svg"
      alt=""
      className="w-full absolute top-0 bg-cover hidden md:block"
    />
  );
};

export default HeaderImage;
