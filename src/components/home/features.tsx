import Image from "next/image";

export default function Features() {
  return (
    <div className="relative w-full py-10 sm:py-16 md:py-20 bg-white">
      {/* Wavy line visualization using SVG */}
      <div className="absolute top-[10%] w-full z-0 pointer-events-none select-none">
        <div className="relative w-full">
          <img
            src="/images/wave-line.svg"
            alt="Wavy line"
            className="w-full h-auto object-contain max-w-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center mb-32 sm:mb-48 md:mb-64 lg:mb-96 text-black">
          Passwords are a Pain. We're the Cure.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 border-b border-gray-200 pb-2 text-black underline decoration-2 underline-offset-8">
              Web3 Password Management Made Simple.
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-8 md:pt-16 lg:pt-24">
            <div>
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Fully On-Chain Storage -
                <span className="text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  No centralized vaults, no compromises.
                </span>
              </p>
            </div>

            <div>
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Bulk Uploads -
                <span className="text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  Save time and reduce gas fees.
                </span>
              </p>
            </div>

            <div>
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                ZK Rollup Security -
                <span className="text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  Top-tier privacy and on-chain proof, without leaking sensitive
                  data.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-16 sm:mt-24 md:mt-32">
          <div className="mx-auto pointer-events-none select-none">
            <Image
              src="/images/feature-image.webp"
              alt="Web3 Password Management Process"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
