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
        description=" Following immigration laws for Croatian companies can be complex due
          to the legal framework that regulates the employment of foreign
          workers in Croatia. This is where we step in to help and speed up the
          whole process."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
