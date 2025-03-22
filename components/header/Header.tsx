import { ReactNode } from "react";

interface HeaderProps {
  headerText: string;
  infoText?: string;
  btn?: ReactNode;
}

export const Header = ({ headerText, infoText, btn }: HeaderProps) => {
  return (
    <section className="w-full relative pb-10 mb-10">
      <h1
        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        className=" mb-5 w-full xl:w-2/3"
      >
        {headerText}
      </h1>
      <p
        style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        className=" lg:w-1/2 text-xl mb-4"
      >
        {infoText}
      </p>
      {btn && <div>{btn}</div>}
    </section>
  );
};
