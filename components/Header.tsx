import Link from "next/link";
import { ReactNode } from "react";

interface HeaderProps {
  headerText: string;
  infoText: string;
  btn?: ReactNode;
}

export const Header = ({ headerText, infoText, btn }: HeaderProps) => {
  return (
    <section className="w-full relative">
      <h1 className=" text-5xl md:text-7xl xl:text-8xl mb-5">{headerText}</h1>
      <p className=" lg:w-1/2 text-xl md:text-2xl xl:text-3xl mb-4">
        {infoText}
      </p>
      {btn && <div>{btn}</div>}
    </section>
  );
};
