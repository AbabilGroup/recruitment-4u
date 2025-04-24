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
        description="Whether you need a waiter, bartender, cook, kitchen assistant, cleaner, or receptionist – we’re here to help you hire the right talent for any role."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
