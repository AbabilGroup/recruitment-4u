"use client";
import { useRouter } from "next/navigation";

import SolutionHeader from "@/components/common/SolutionHeader";
export default function MedicalHeader() {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 container">
      <SolutionHeader
        title="Employment of medical workers"
        description="Doctors, nurses, medical technicians, pharmacists, and other healthcare professionals – we are here to assist you with recruiting for all medical roles.."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
