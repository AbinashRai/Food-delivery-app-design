import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* text container */}
      <div className="h-1/2">
        <h1 className="">Test</h1>
        <button className="">Order Now</button>
      </div>
      {/* image container */}
      <div className="h-1/2 relative w-full">
        <Image src="/slide1.png" alt="" fill />
      </div>
    </div>
  );
};

export default Slider;
