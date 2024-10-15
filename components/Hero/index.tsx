"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="relative mb-20 mt-30 flex w-full flex-col">
          <h1 className="space-y-6 py-10 text-center">
            <span className="mb-5 text-center text-5xl font-bold text-black dark:text-white sm:text-5xl md:text-5xl lg:text-7xl">
              AI Power, Decentralized
            </span>
          </h1>
          <p className="mx-auto mb-10 text-center md:w-4/5 lg:w-3/5 xl:w-[50%]">
            Discover a new era of AI that is efficient, scalable, and private,
            directly from your device.
          </p>
          <div className="flex justify-center">
            <a
              href="/support"
              className="inline-flex items-center gap-2.5 rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
            >
              Get Started
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
