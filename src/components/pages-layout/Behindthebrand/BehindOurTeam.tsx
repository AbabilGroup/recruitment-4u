import React from "react";
import TeamCard from "@/components/common/TeamCard";

export default function BehindOurTeam() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TeamCard
            title="CEO"
            name="Andrei Popescu"
            imageSrc="/images/team1.jpg"
            emailLink="andrei.popescu@recruitment-4u.co"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Co-Founder"
            name="Ivan Kovačević"
            imageSrc="/images/team7.jpg"
            emailLink="ivan@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Recruitment Consultant"
            name="Luka Jovanović"
            imageSrc="/images/team2.jpg"
            emailLink="luka@recruitment-4u.co"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Talent Acquisition Specialist"
            name="Ivana Radić"
            imageSrc="/images/team3.jpg"
            emailLink="ivana@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Sourcing Specialist"
            name="Matteo Borg"
            imageSrc="/images/team4.jpg"
            emailLink="matteo@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Account Manager (Clients)"
            name="Stefan Ionescu"
            imageSrc="/images/team5.jpg"
            emailLink="stefan@recruitment-4u.co"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Candidate Relationship Manager"
            name="Marko Petrović"
            imageSrc="/images/team6.jpg"
            emailLink="marko@recruitment-4u.co"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Recruitment Coordinator"
            name="Emma Camilleri"
            imageSrc="/images/team8.jpg"
            emailLink="emma@recruitment-4u.co"
            bgColor="bg-[#9CC8C0]"
          />
          <TeamCard
            title="Business Development Executive"
            name="Elena Marinescu"
            imageSrc="/images/team9.jpg"
            emailLink="elena@recruitment-4u.co"
            bgColor="bg-[#D388BE]"
          />
          <TeamCard
            title="Employer Branding Specialist"
            name="Ana Stojanović"
            imageSrc="/images/team10.jpg"
            emailLink="ana@recruitment-4u.co"
            bgColor="bg-[#D388BE]"
          />
        </div>
      </div>
    </section>
  );
}
