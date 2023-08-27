import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import React from "react";
import Image from "next/image";
import Offer from "@/components/Offer";

const page = () => {
  return (
    <div>
      <Slider />
      <Featured />
      <Offer />
    </div>
  );
};

export default page;
