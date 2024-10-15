import Image from "next/image";
import { ArrowRight, Cpu, Network, Shield, Zap } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const features = [
  {
    name: "Scalable Decentralized Nodes",
    description:
      "Utilizes scalable decentralized nodes for tasks like NLP, image recognition, and AGI simulations.",
    icon: Network,
  },
  {
    name: "Bandwidth-Efficient Model Interaction",
    description:
      "Achieves bandwidth-efficient model interaction through secure blockchain-based architecture.",
    icon: Zap,
  },
  {
    name: "Integrated Blockchain Controls",
    description:
      "Features integrated blockchain and cryptographic controls for enhanced security.",
    icon: Shield,
  },
  {
    name: "Flexible AI Task Handling",
    description:
      "Uniform architecture allows for flexible AI task handling across the network.",
    icon: Cpu,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-14 lg:px-8">
        <div className="mt-20 text-left">
          <h1 className="text-base font-semibold uppercase tracking-wide text-gray-600">
            The Decentralized AI Engine for Everyone
          </h1>
          <span className="mt-1 text-5xl font-extrabold text-gray-900 dark:text-white sm:text-6xl sm:tracking-tight md:text-6xl lg:text-7xl">
            Tennet™
          </span>
          <p className=" mt-5 text-left text-xl  text-gray-500 lg:w-1/2 xl:w-1/2">
            General-purpose AI inference acceleration. Combines decentralized
            computing and blockchain in a single, powerful platform.
          </p>
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <Image
              className="relative mx-auto"
              width={490}
              height={300}
              src="/images/hero/banner.png"
              alt="The Decentralized AI Engine for Everyone"
            />
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-lg bg-gray-50 shadow-lg">
          <div className="relative mx-auto max-w-7xl px-4 py-8 dark:bg-gray-700 sm:px-6 lg:px-8 lg:py-12">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                Next-gen decentralized AI
              </h3>
              <p className="mt-3 text-center text-lg text-gray-500 dark:text-gray-300 lg:w-1/2">
                Tennet™ enables direct integration of multiple AI models via
                Bittensor's TAO subnet, providing unparalleled scalability and
                efficiency for decentralized AI operations.
              </p>
            </div>
            <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="relative">
                <dl className="mt-10 space-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-gray-500 text-white">
                          <feature.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="ml-16 mt-2 text-base text-gray-500 dark:text-gray-300">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
                <Image
                  className="relative mx-auto"
                  width={490}
                  height={300}
                  src="/images/hero/banner.png"
                  alt="The Decentralized AI Engine for Everyone"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Use Cases
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Tennet™ powers a wide range of AI applications, from large
                language models to dynamic user-driven AI workflows.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex">
                  <ArrowRight
                    className="h-6 w-6 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <p className="ml-3 text-base text-gray-500">
                    Large Language Models (LLMs)
                  </p>
                </div>
                <div className="flex">
                  <ArrowRight
                    className="h-6 w-6 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <p className="ml-3 text-base text-gray-500">
                    Dynamic user-driven AI workflows
                  </p>
                </div>
                <div className="flex">
                  <ArrowRight
                    className="h-6 w-6 flex-shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <p className="ml-3 text-base text-gray-500">
                    Decentralized AI model training and validation
                  </p>
                </div>
              </div>
            </div>
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <Image
                className="relative mx-auto"
                width={490}
                height={300}
                src="/images/hero/banner.png"
                alt="The Decentralized AI Engine for Everyone"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
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
                className="inline-flex items-center gap-2.5 rounded-md bg-gray-700 px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-gray-700"
              >
                Get Started
                <FaArrowRight />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
