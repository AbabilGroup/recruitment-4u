import React from "react";
import { UserCheck } from "lucide-react";

export default function HrWhatDo() {
  return (
    <section className="bg-[#F8F8F8] mx-auto py-12">
      <h1 className="text-[52px] text-center text-black font-bold">
        What we do
      </h1>
      <div className="container max-w-[900px] pb-20 mx-auto">
        {/* Use flex for same height and wrap for responsiveness */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {/* Box 1 */}
          <div className="flex-1 flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <UserCheck height={60} width={70} className="text-primary" />
              <div className="mt-10">
                <h4 className="text-black text-[30px] font-bold">
                  Employer branding
                </h4>
                <p className="text-[20px] text-black font-normal">
                  We create an attractive perception of your company for job
                  seekers and employees.
                </p>
                <p className="mt-5 text-primary text-[20px] font-normal">
                  It will help you to hire and retain top talents.
                </p>
              </div>
            </div>
            <button className="text-[20px] mt-5 text-primary font-bold underline text-left">
              More details
            </button>
          </div>

          {/* Box 2 */}
          <div className="flex-1 flex flex-col justify-between bg-white p-6 rounded-lg shadow-md">
            <div>
              <UserCheck height={60} width={70} className="text-primary" />
              <div className="mt-10">
                <h4 className="text-black text-[30px] font-bold">
                  Employee experience
                </h4>
                <p className="text-[20px] text-black font-normal">
                  We develop and structure employee experience so they promote
                  your brand and attract new talents.
                </p>
              </div>
            </div>
            <button className="text-[20px] mt-5 text-primary font-bold underline text-left">
              More details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
