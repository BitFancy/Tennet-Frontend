"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowTrendUp,
  faPooStorm,
  faMicrochip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowTrendUp, faPooStorm, faMicrochip, faUserGroup);
import DynamicIcon from "./DynamicIcon";
import { METRIC } from "@/types/metrics";

const Metric = ({ metric }: { metric: METRIC }) => {
  const { name, value, icon, color } = metric;

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
          <div
            key={name}
            className="dark: overflow-hidden rounded-lg bg-white text-white shadow dark:bg-gray-400"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <DynamicIcon
                    iconName={icon}
                    className="h-6 w-6 text-gray-700 dark:text-white "
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500 dark:text-white">
                      {name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900 dark:text-white">
                        {value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-900"
                >
                  View details
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Metric;
