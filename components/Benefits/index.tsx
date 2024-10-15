"use client";
import React from "react";
import benefitsData from "./benefitsData";
import SingleBenefit from "./SingleBenefit";

const Benefit = () => {
  return (
    <>
      <section className="py-5 lg:py-5 -xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-2 xl:mt-10 xl:gap-12.5">
            {benefitsData.map((benefit, key) => (
              <SingleBenefit benefit={benefit} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
