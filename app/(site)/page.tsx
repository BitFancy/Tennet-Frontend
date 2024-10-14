import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import SectionHeader from "@/components/Common/SectionHeader";
import { FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Veil Protocol",
  description: "This is next-gen decentralized AI",
  icons: {
    icon: "/images/logo/logo.png",
  },
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <div className="mt-15">
        <About />
      </div>
      <div className="mt-15">
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: "The Future of AI is Here",
            description:
              "The quest for decentralized, autonomous AI is accelerating, pushing the boundaries of machine learning beyond traditional limits.",
          }}
        />
      </div>
      <section className="mx-auto mb-20 mt-10 max-w-4xl rounded-lg bg-gray-800 p-8">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          A Secure Foundation for Decentralized AI
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          Veil Protocol reshapes the landscape of AI by decentralizing model
          training and validation. We unlock the power of community-driven AI,
          removing central points of failure and opening limitless possibilities
          for autonomous intelligence.
        </p>
        <p className="text-lg text-gray-300">
          Built on a scalable TAO subnet, the app enables users, from
          individuals to enterprises, to participate in the future of
          decentralized AI.
        </p>
      </section>
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: "Key Features",
          description: ``,
        }}
      />

      <div className="-mt-15 flex flex-col items-center justify-center">
        <Feature />
        <a
          href="/features"
          className="flex w-[134px] flex-row items-center gap-2 text-center underline"
        >
          More Features
          <FaArrowRight />
        </a>
      </div>
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <div className="my-15">
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
              href="#"
              className="inline-flex items-center gap-2.5 rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-gray-900"
            >
              Get Started
              <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
      {/* <Blog /> */}
    </main>
  );
}
