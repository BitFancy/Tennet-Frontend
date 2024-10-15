"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left"
            >
              <div className="flex flex-col items-center p-6 md:flex-row">
                <div className="mb-6 md:mb-0 md:w-1/2">
                  <h3 className="mb-2 text-5xl font-bold dark:text-white">
                    Veil Protocol
                  </h3>
                  <p className="mb-4 text-2xl text-gray-600 dark:text-gray-300">
                    Advancing the quest for autonomous machine learning by
                    decentralizing AI operations to perform more efficient,
                    scalable, and personal tasks directly on devices.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/hero/banner.png"
                    alt="Veil Protocol"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
