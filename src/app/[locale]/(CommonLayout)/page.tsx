"use client";

// import { useRouter } from "next/navigation";
import Hero from "@/components/pages-layout/Home/Hero";
import CardHome from "@/components/pages-layout/Home/CardHome";
import HomeEmploy from "@/components/pages-layout/Home/HomeEmploy";
import AgencySection from "@/components/pages-layout/Home/AgencySection";

import Solution from "@/components/pages-layout/Home/Solution";
import Brand from "@/components/pages-layout/Home/Brand";
import RecruitmentCenters from "@/components/pages-layout/Home/RecruitmentCenters";
import Process from "@/components/pages-layout/Home/Process";

export default function Home() {
  // const handleContactClick = () => {
  //   router.push("/contact");
  // };

  return (
    <main >
      <Hero />
      <CardHome />
      <HomeEmploy />
      <AgencySection />
      <Solution />
      <Brand />
      <RecruitmentCenters />
      <Process />
      {/* <CommonBanner
        title="Our mission is to connect the right workers with the right employers."
        buttonText="Let's Cooperation"
        onButtonClick={handleContactClick}
      /> */}
    </main>
  );
}
