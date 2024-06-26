/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react';
import CarouselComp from '@/components/sharedComponents/Carousel';
import { Typography } from '@material-tailwind/react';
import SharedContainer from '@/components/sharedComponents/SharedContainer';
import { flavors, ourDonuts } from '@/components/data/texts';

function Donuts() {
  return (
    <div className="flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck pt-32 md:pt-48">
      <div className="w-full h-full  backdrop-blur-sm  flex  md:p-10 justify-evenly items-center md:text-2xl flex-wrap flex-col md:gap-20 gap-10">
        <SharedContainer images={ourDonuts} whatComp={'donuts'} />
        <CarouselComp images={flavors} whatComp="donuts" />
      </div>
    </div>
  );
}

export default Donuts;
