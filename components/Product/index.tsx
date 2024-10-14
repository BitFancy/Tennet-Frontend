"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import PRODUCTItemR from "./ProductItemR";
import PRODUCTItemL from "./ProductItemL";
import productData from "./productData";

const Product = () => { 
  return (
      <section>
        <div>
            <motion.div 
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-4/5"
            >
                {productData.map((product, key) => (
                    key % 2 === 0 ? (
                        <PRODUCTItemR key={key} productData={product} />
                    ) : (
                        <PRODUCTItemL key={key} productData={product} />
                    )
                ))}
            </motion.div>
        </div>
      </section>
  );
};

export default Product;
