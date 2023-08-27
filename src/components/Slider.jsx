import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-6vh)] md:h-[calc(100vh-9vh)]">
      {/* text container */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:text-6xl lg:text-7xl">
          Test
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* image container */}
      <div className="h-1/2 relative w-full">
        <Image src="/slide1.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
