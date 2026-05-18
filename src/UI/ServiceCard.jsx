// ServiceCard.jsx

import React from "react";
import { Link } from "react-router";
import GradientButton from "./GradientButton";

const ServiceCard = ({
  image,
  title,
  description,
  buttonText = "Learn More",
  link = "#",
}) => {
  return (
    <div className="w-[350px] md:w-[280px] min-h-[550px] rounded-[32px] bg-white p-3 shadow-xl flex flex-col">
      
      {/* Image */}
      <div className="overflow-hidden rounded-[26px]">
        <img
          src={image}
          alt={title}
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-2 py-4">
        
        <div>
          <h3 className="text-[28px] font-semibold leading-tight text-[#171717]">
            {title}
          </h3>

          <p className="mt-2 text-[15px] leading-relaxed text-[#8B8B8B]">
            {description}
          </p>
        </div>

        {/* Button */}
        <Link to={link} className="mt-auto pt-5 md:pt-0 ">
          <GradientButton
            text={buttonText}
            className="inline-flex justify-center items-center"
            padding="px-[25px] py-3 md:py-[10px]"
          />
        </Link>

      </div>
    </div>
  );
};

export default ServiceCard;