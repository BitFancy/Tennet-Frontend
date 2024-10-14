import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

type productData = {
  headline: string;
  image: string;
  title: string;
  description: string;
};

const PRODUCTItem = ({ productData }: { productData: productData }) => {
  const { headline, image, title, description } = productData;

  return (
    <>
      <div className="flex flex-col border-b border-stroke last-of-type:border-none dark:border-strokedark md:w-4/5">
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
          className="animate_left mt-10 md:w-4/5"
        >
          <span className="font-medium uppercase text-black dark:text-white">
            {headline}
          </span>
          <h2
            className="relative mb-6 font-bold text-black dark:text-white xl:text-hero"
            style={{ fontSize: "124px", lineHeight: "124px" }}
          >
            {title}
          </h2>
          <p className="text-2xl">{description}</p>
        </motion.div>
      </div>
      <div className="mt-15 flex items-center justify-between">
        <div className="bg-gray-200 py-5 pl-56 pr-56">
          <Image
            width={500}
            height={500}
            src="/images/shape/shape-06.png"
            alt="Saly"
            className="hidden shadow-lg xl:block"
          />
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2.5 rounded-sm bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
        >
          Discover
          <FaArrowRight />
        </a>
      </div>
    </>
  );
};

export default PRODUCTItem;
