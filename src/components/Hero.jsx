import React from 'react';
import bgImg from '../assets/Hshoe.avif';

const Hero = () => {
  return (
    <div className="w-full relative">
      {/* Hero Image */}
      <img
        className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[730px] object-cover"
        src={bgImg}
        alt="hero image"
      />

      {/* Shadow Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Text on top */}
      <div className="absolute bottom-6 left-4 sm:left-6 md:left-10 lg:left-12 text-white font-bold max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%]">
        <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight capitalize">
          now in: premium super lowpro
        </h1>
        <p className="mt-2 text-base sm:text-sm md:text-xl lg:text-[1.2rem]">
          A full-leather take on a retro silhouette, now in fresh colors.
        </p>
        <a
          href="#"
          className="mt-3 inline-block underline text-base sm:text-lg md:text-xl lg:text-[1.2rem]"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
