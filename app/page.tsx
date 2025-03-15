import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="text-8xl mb-5">Alle skal ha tilgang</h1>
      <p className="text-3xl w-1/2 mb-4">
        Artikler, råd, veiledere og eksprimentering rundt universell utforming
        av teknologi og hvordan det kan skape en bedre brukeropplevelse for alle
      </p>
      <Link href="#">
        <button className=" p-4 text-2xl rounded-md border-4 ">
          Forslag til tema
        </button>
      </Link>
    </section>
  );
}
