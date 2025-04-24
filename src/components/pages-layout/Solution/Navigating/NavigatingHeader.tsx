"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SolutionHeader from "@/components/common/SolutionHeader";
export default function NavigatingHeader() {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 container ">
      <SolutionHeader
        title="Navigating immigration laws"
        description="Navigating immigration laws across Europe can be challenging due to the varying legal frameworks governing the employment of foreign workers. That’s where we come into simplify and accelerate the entire process."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
