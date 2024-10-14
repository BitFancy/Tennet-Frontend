"use client";
import React from "react";
import applicationsData from "./applicationsData";
import SingleApplication from "./SingleApplication";

const Feature = () => {

  return (
    <>
      <section className="py-10 lg:py-15 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            {applicationsData.map((application, key) => (
              <SingleApplication application={application} key={key} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Feature;
