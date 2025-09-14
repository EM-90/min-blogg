import { ReactNode } from "react";

interface HeaderProps {
  headerText: string;
  infoText?: string;
  btn?: ReactNode;
}

export const Header = ({ headerText, infoText, btn }: HeaderProps) => {
  return (
    <article className="w-full relative py-10 mb-20 ">
      <section className="">
        <h1
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          className=" mb-3 xl:w-2/3 leading-tight  md:leading-22 font-regular"
        >
          {headerText}
        </h1>
      </section>
      <p
        style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        className="sub-title lg:w-1/2 text-xl mb-4 font-regular leading-snug"
      >
        {infoText}
      </p>
      {btn && <div className="mt-10">{btn}</div>}
    </article>
  );
};
