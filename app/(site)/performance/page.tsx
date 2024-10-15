"use client";

import { useState } from "react";
import { ArrowUpRight, TrendingUp, Zap, Cpu, Users } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SectionHeader from "@/components/Common/SectionHeader";
import Metric from "@/components/Metrics";
import metricData from "@/components/Metrics/metricsData";
import { FaArrowRight } from "react-icons/fa";

const projectionData = [
  { year: 2024, throughput: 3, scalability: 5, tasks: 2 },
  { year: 2025, throughput: 4, scalability: 7, tasks: 3 },
  { year: 2026, throughput: 5.5, scalability: 10, tasks: 4.5 },
  { year: 2027, throughput: 7.5, scalability: 14, tasks: 6.5 },
  { year: 2028, throughput: 10, scalability: 20, tasks: 9 },
];

export default function PerformancePage() {
  const [activeMetric, setActiveMetric] = useState("throughput");

  return (
    <>
      <section className="overflow-hidden pb-20 pt-25 md:pt-20 xl:pb-25 xl:pt-20">
        <div className="-mb-20 mt-20">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Performance Metrics",
              description:
                "Discover how Veil Protocol is revolutionizing decentralized AI performance",
            }}
          />
        </div>
      </section>
      <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mt-6">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Current Performance Highlights
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {metricData.map((metric) => (
                <Metric metric={metric} />
              ))}
            </div>
          </div>

          <div className="my-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Future Projections
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-white">
              Estimated growth in key performance areas over the next five years
            </p>
            <div className="mt-10 rounded-lg bg-white p-6 shadow dark:bg-gray-700">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Performance Growth
                  </h3>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <select
                    value={activeMetric}
                    onChange={(e) => setActiveMetric(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-white sm:text-sm"
                  >
                    <option value="throughput">Validation Throughput</option>
                    <option value="scalability">Scalability</option>
                    <option value="tasks">AI Tasks Capacity</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 h-80 dark:bg-gray-700 dark:text-white">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={activeMetric}
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-20">
          <section className="space-y-4 text-center">
            <h2 className="text-3xl font-bold dark:text-white">
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
      </div>
    </>
  );
}
