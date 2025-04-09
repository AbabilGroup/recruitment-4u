"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SolutionHeader from "@/components/common/SolutionHeader";

export default function SeasonalHeader() {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 container ">
      <SolutionHeader
        title="Employment of seasonal workers"
        description="Waiter/bartender, cook, assistant kitchen worker, maid/cleaner and receptionist – we can help you in hiring any profession."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
