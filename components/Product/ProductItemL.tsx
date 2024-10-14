import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

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
                className="animate_left md:w-4/5 mt-10"
                >
                    <span className="font-medium uppercase text-black dark:text-white">
                        {headline}
                    </span>
                    <h2 className="relative mb-6 font-bold text-black dark:text-white xl:text-hero" style={{fontSize: '124px', lineHeight: '124px'}}>
                        {title}
                    </h2>
                    <p className="text-2xl">
                        {description}
                    </p>
                </motion.div>
            </div>
            <div className="flex items-center justify-between mt-15">
                <a
                    href="#"
                    className="inline-flex items-center gap-2.5 rounded-sm bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                    <FaArrowLeft />
                    Discover
                </a>
                <div className="bg-gray-200 pl-56 pr-56 py-5">
                    <Image
                        width={500}
                        height={500}
                        src="/images/shape/shape-06.png"
                        alt="Saly"
                        className="hidden xl:block shadow-lg"
                    />
                </div>
            </div>
      </>
    );
  };
  
  export default PRODUCTItem;
  