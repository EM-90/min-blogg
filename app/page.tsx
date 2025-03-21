import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <Header
      headerText="Alle skal ha tilgang"
      infoText="Artikler, råd, veiledere og eksprimentering rundt universell utforming av teknologi og hvordan det kan skape en bedre brukeropplevelse for alle"
      btn={
        <Link href="/kontakt">
          <button className="p-4 text-2xl rounded-md border-4">
            Kontakt oss
          </button>
        </Link>
      }
    />
  );
}
