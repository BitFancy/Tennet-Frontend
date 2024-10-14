"use client";

import React from "react";
import Features from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import SectionHeader from "@/components/Common/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

const FeaturesPage = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-20">
      <div className="-mb-20 mt-20">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: "Features of Tennet",
            description: `Fully integrated decentralized AI framework with seamless mobile app connectivity`,
          }}
        />
      </div>
      <Features />
      <div className="my-10">
        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Build on Tennet Protocol?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Join our community of developers and innovators shaping the future
            of decentralized AI.
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
        </section>
      </div>
    </section>
  );
};

export default FeaturesPage;
