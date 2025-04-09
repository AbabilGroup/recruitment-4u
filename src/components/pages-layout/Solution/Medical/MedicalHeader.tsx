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
        description="Doctors, nurses, medical technicians, pharmacists and other health professionals – we can help you with the recruitment of all medical professions."
        onClick={() => handleButtonClick("/contact")}
      />
    </section>
  );
}
