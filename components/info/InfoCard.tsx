interface InfoCardProps {
  headerText: string;
  textContent: string[];
}

const infoBgColor = "var(--info-card-bg)";

export const InfoCard = ({ headerText, textContent }: InfoCardProps) => {
  return (
    <article
      style={{
        backgroundColor: infoBgColor,
        boxShadow: "10px 10px 0px 0px black",
      }}
      className="py-9 px-9 outline-2 w-full 2xl:w-2/3 scale-100 rounded-xl"
    >
      <h2
        style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        className=" font-semibold mb-7"
      >
        {headerText}
      </h2>
      {textContent.map((paragraph, index) => (
        <p
          key={index}
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
          className="mb-4 last:mb-0"
        >
          {paragraph}
        </p>
      ))}
    </article>
  );
};
