import React from "react";
import { Application } from "@/types/application";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBase } from "react-icons";

const SingleApplication = ({ application }: { application: Application }) => {
  const { title, icon, description, imagePosition, image } = application;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div
            className={`flex flex-col ${
              imagePosition === "Right" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2">
              <Image
                src="/images/applications/application_1.png"
                alt={title}
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center p-6 md:w-1/2">
              <div>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="mb-4 text-gray-600">{description}</p>
                <a
                  href="#"
                  className="flex items-center font-semibold text-blue-500"
                >
                  READ MORE
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleApplication;
