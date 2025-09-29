import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

function PrimaryCta() {
  return (
    <Link
      href="/articles"
      className=" cta-btn p-4 text-xl md:text-2xl font-light cursor-pointer text-white rounded-lg hover:bg-slate-700  bg-black focus:bg-black hover:outline-4 hover:outline-black flex-row inline-flex gap-2 items-center"
    >
      Utforsk artikler
      <ArrowRightIcon />
    </Link>
  );
}

export default PrimaryCta;
