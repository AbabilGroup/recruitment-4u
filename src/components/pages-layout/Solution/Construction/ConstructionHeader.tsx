"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SolutionHeader from "@/components/common/SolutionHeader";
export default function ConstructionHeader() {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 container">
      <SolutionHeader
        title="Employment of construction workers"
        description="We offer a wide range of skilled professionals, including armourers, carpenters, masons, metal structure fitters, roofers, and construction machinery operators."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
