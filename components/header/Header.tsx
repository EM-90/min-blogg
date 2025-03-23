import { ReactNode } from "react";
import { Hand, Eye, Ear } from "lucide-react";

interface HeaderProps {
  headerText: string;
  infoText?: string;
  btn?: ReactNode;
}

export const Header = ({ headerText, infoText, btn }: HeaderProps) => {
  return (
    <article className="w-full relative pb-10 mb-10 ">
      <section className="">
        <h1
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          className=" mb-2 xl:w-2/3 leading-tight font-semibold"
        >
          {headerText}
        </h1>
        <div className=" hidden gap-2 pb-5">
          <Eye size={40} />
          <Hand size={40} />
          <Ear size={40} />
        </div>
      </section>
      <p
        style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}
        className=" lg:w-1/2 text-xl mb-4  leading-snug"
      >
        {infoText}
      </p>
      {btn && <div>{btn}</div>}
    </article>
  );
};
