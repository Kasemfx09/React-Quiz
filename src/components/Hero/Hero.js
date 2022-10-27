import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container mx-auto flex flex-col items-center text-center md:pt-8 md:px-10 lg:px-32">
          <h1 className="font-bold text-4xl">
            Information Technology
            <p className="text-violet-400 text-3xl"> Quizzes & Trivia</p>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Let’s get it started with another great quiz, this time from the
            world of IT!!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
