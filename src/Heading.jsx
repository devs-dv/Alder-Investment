import React from "react";
import { motion } from "framer-motion";

const Heading = () => (
  <>
    <h1 className="font-medium text-white text-4xl md:text-6xl md:leading-tight custom-lg:text-[5rem] lg:container mb-20 md:mb-0 max-lg:-mt-36 absolute md:top-1/3 top-[29vh] md:left-[6vw] left-[5.5vw] nest-hub:text-5xl nest-hub-max:text-2xl widescreen:text-[58px] ">
      {/* <h1 className="font-medium  text-white text-3xl md:text-6xl 2xl:text-[5rem] lg:container max-md:mb-20 max-lg:-mt-36 absolute top-1/3 left-[6vw] max-md:left-[5.5vw] max-md:top-[45vh]"> */}
      When you imagine your family&apos;s future,{" "}
      <br className="hidden md:block" /> What do you see?
    </h1>
    <div className="lg:hidden -mt-8"></div>
  </>
);

export default Heading;
