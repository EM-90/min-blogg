import { ReactNode } from "react";

interface HeaderProps {
  headerText: string;
  infoText?: string;
  btn?: ReactNode;
}

export const Header = ({ headerText, infoText, btn }: HeaderProps) => {
  return (
    <section className="w-full relative mb-20 ">
      <h1
        style={{ fontSize: "clamp(2.2rem, 4.4vw, 5rem)" }}
        className=" mb-3 xl:w-2/3 leading-tight font-regular"
      >
        {headerText}
      </h1>
      <p
        style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        className="sub-title lg:w-1/2 text-xl mb-4 font-regular leading-snug"
      >
        {infoText}
      </p>
      {btn && <div className="mt-10">{btn}</div>}
    </section>
  );
};
