'use client';

import React from 'react';
import Image from 'next/image';

const TailoredBFSISection = () => {
  return (
    <section className="relative w-full h-[471px] overflow-hidden">

      <Image
        src="/assets/bfsiexpert.png"
        alt="Tailored BFSI Expertise"
        fill
        priority
        style={{ objectFit: 'cover' }}
        className="z-0"
      />


      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#006E81] to-transparent" style={{ width: '90%' }} />


      <div className="relative z-20 h-full flex flex-col justify-center pl-[148px]">
        <h2 className="text-white font-['Inter'] text-[50px] font-bold leading-[100%] w-[598px]">
          Tailored BFSI Expertise
        </h2>
        <p className="text-white font-['Inter'] text-[20px] font-normal leading-[100%] mt-4 w-[598px]">
          With deep BFSI domain knowledge and customizable solutions, we help you optimize workflows, reduce risk, and drive measurable business growth.
        </p>
      </div>
    </section>
  );
};

export default TailoredBFSISection;
