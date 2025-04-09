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
        description="We offer you a wide range of activities, among others, they are armourers, carpenters, carpenters, masons, fitters of metal structures, roofers, drivers of construction machines."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
