// Card.jsx

import React from "react";

const Card = ({
  image,
  title,
  text,

}) => {
  return (
    <div className="w-[350px] md:w-[280px] rounded-[32px] bg-white p-3 shadow-xl flex flex-col">
      
      {/* Image */}
      <div className="flex justify-center items-center overflow-hidden rounded-[26px]">
        <img
          src={image}
          alt={title}
          className="w-25 h-25 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-2 py-4">
        
        <div>
          <h3 className="text-[22px] font-semibold leading-tight text-[#171717] text-center">
            {title}
          </h3>
          <p className="text-black/80 text-[18px] text-center mx-auto">
            {text}
          </p>

          
        </div>

        {/* Button */}

      </div>
    </div>
  );
};

export default Card;