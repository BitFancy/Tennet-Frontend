"use client";
import React from "react";
import { usePathname } from "next/navigation";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import { Console } from "console";

const Feature = () => {
  const currentUrl = usePathname();
  console.log("current url ->>>>>>>>", currentUrl);

  return (
    <>
      <section className="py-10 lg:py-15 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {currentUrl === "/"
              ? featuresData
                  .slice(0, 3)
                  .map((feature, key) => (
                    <SingleFeature feature={feature} key={key} />
                  ))
              : featuresData.map((feature, key) => (
                  <SingleFeature feature={feature} key={key} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
