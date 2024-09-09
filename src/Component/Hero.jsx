import React from "react";

function Hero() {
  return (
    <>
      <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black/50 before:z-10">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div class="min-h-[380px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 class="text-white sm:text-4xl text-2xl font-bold mb-6">
            Showcase Your Product or Service in Style
          </h2>
          <p class="text-base text-center text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur nibh, a
            pharetra felis turpis vitae ligula. Etiam laoreet velit nec neque
            ultrices, non consequat mauris tincidunt.
          </p>
          <button
            type="button"
            class="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold outline-none  bg-orange-600 hover:bg-orange-700 border-2 border-orange-600 transition-all duration-300"
          >
            Getting started now
          </button>
        </div>
      </div>
      <div>
        {" "}
        <ul class="flex items-center bg-gray-950 justify-around space-x-4 font-[sans-serif] mt-0 shadow-md">
          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            All
          </li>

          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            Startups
          </li>

          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            Security
          </li>
          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            AI
          </li>
          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            Apps
          </li>
          <li class="text-slate-50 hover:text-orange-500 text-center py-2 font-bold text-[18px] text-base cursor-pointer">
            Techs
          </li>
        </ul>
      </div>
     
    </>
  );
}

export default Hero;
