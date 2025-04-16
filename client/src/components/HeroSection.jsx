import React from "react";

function HeroSection() {
  return (
    <section className="pt-50 pb-30  text-center px-4 rounded-b-3xl shadow-inner">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-gray-700 leading-tight mb-6">
          Raise your voice,<br /> support what matters.
        </h1>

        <div className="flex justify-center space-x-4 mt-10 flex-wrap">
          <button className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
            Start a Petition
          </button>
          <button className="px-4 py-2 rounded-md cursor-pointer border border-blue-600 text-blue-600 hover:bg-blue-50">
            Vote in a Poll
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
