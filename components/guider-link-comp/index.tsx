import React from "react";
import { ArrowRight } from "lucide-react";

interface GuiderLinkCompProps {
  linkTitle: string;
}

function GuiderLinkComp({ linkTitle }: GuiderLinkCompProps) {
  return (
    <div className="link-container flex justify-between items-center py-2 pr-1 border-b-2 text-xl font-medium">
      {linkTitle} <ArrowRight color="#436FFF" />
    </div>
  );
}

export default GuiderLinkComp;
