import React from "react";
import { Button } from "../ui/button";
type PropsBanner = {
  title: string;
  description: string;
  onClick?: () => void;
};

const SolutionHeader: React.FC<PropsBanner> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <div className="w-[600px] mx-auto flex flex-col text-center items-center justify-center">
      <h1 className="text-[52px] text-black font-bold">{title}</h1>
      <div className="">
        <p className="text-[18px] text-black leading-relaxed">{description}</p>
        <Button
          onClick={onClick}
          className="px-12 rounded-full py-7 text-[25px] font-bold mt-10">
          Contact
        </Button>
      </div>
    </div>
  );
};

export default SolutionHeader;
