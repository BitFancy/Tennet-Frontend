"use client";

import React from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import Benefit from "@/components/Benefits";
import { FaArrowRight } from "react-icons/fa";

const BenefitsPage = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-20">
      <div className="-mb-20 mt-20">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: "Benefits of Veil Protocol",
            description:
              "The Veil Protocol features network efficiency, decentralized performance, security, and reduced centralization for improved AI interactions.",
          }}
        />
        <Benefit />
      </div>
      <div className="mt-30">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: "Key differences from existing protocols",
            description: "",
          }}
        />
        <div className="mt-20 flex justify-center">
          <div className="overflow-x-auto rounded-lg shadow-md md:w-4/5 lg:w-2/3">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-200 text-xl uppercase text-gray-600 dark:bg-gray-700 dark:text-white">
                <tr>
                  <th className="border-b px-6 py-3">Feature/Attribute</th>
                  <th className="border-b px-6 py-3">Veil Protocol</th>
                  <th className="border-b px-6 py-3">
                    Traditional AI Protocols
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:text-white">
                  <td className="px-6 py-4">Decentralization</td>
                  <td className="px-6 py-4">
                    Fully decentralized architecture
                  </td>
                  <td className="px-6 py-4">Centralized control</td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white">
                  <td className="px-6 py-4">Scalability</td>
                  <td className="px-6 py-4">5X scalability increase</td>
                  <td className="px-6 py-4">Limited scalability</td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:text-white">
                  <td className="px-6 py-4">Efficiency</td>
                  <td className="px-6 py-4">3X validation throughput gains</td>
                  <td className="px-6 py-4">Slower processing speeds</td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white">
                  <td className="px-6 py-4">Task Capacity</td>
                  <td className="px-6 py-4">Supports 2X more AI tasks</td>
                  <td className="px-6 py-4">Limited task handling</td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:text-white">
                  <td className="px-6 py-4">Security</td>
                  <td className="px-6 py-4">
                    Built-in decentralized governance
                  </td>
                  <td className="px-6 py-4">
                    Vulnerable to single points of failure
                  </td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white">
                  <td className="px-6 py-4">User Interaction</td>
                  <td className="px-6 py-4">
                    Direct connections between users
                  </td>
                  <td className="px-6 py-4">Mediated by central servers</td>
                </tr>
                <tr className="border-b even:bg-gray-50 hover:bg-gray-100 dark:bg-gray-500 dark:text-white">
                  <td className="px-6 py-4">Flexibility</td>
                  <td className="px-6 py-4">
                    High flexibility with task handling
                  </td>
                  <td className="px-6 py-4">Rigid structures</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-10">
        <section className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Build on Veil Protocol?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-400">
            Join our community of developers and innovators shaping the future
            of decentralized AI.
          </p>
          <div className="flex justify-center">
            <a
              href="/support"
              className="inline-flex items-center gap-2.5 rounded-md bg-gray-700 px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
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

export default BenefitsPage;
