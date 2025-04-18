import Image from "next/image";

export default function Features() {
  return (
    <div className="relative w-full py-20 bg-white">
      <div className="absolute top-1/10 w-full h-fit z-0">
        <img src="/images/wave-line.svg" alt="Wavy line" className="top-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-7xl font-thin text-center mb-96 text-black">
          Passwords are a Pain. We're the Cure.
        </h2>

        <div className="grid md:grid-cols-2">
          <div>
            <h3 className="text-6xl font-medium mb-6 border-b border-gray-200 pb-2 text-black underline decoration-2 underline-offset-8">
              Web3 Password Management Made Simple.
            </h3>
          </div>

          <div className="space-y-8 text-4xl pt-24">
            <div>
              <h4 className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Fully On-Chain Storage -
              </h4>
              <p className="text-gray-700 underline decoration-2 underline-offset-8">
                No centralized vaults, no compromises.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Bulk Uploads -
              </h4>
              <p className="text-gray-700 underline decoration-2 underline-offset-8">
                Save time and reduce gas fees.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                ZK Rollup Security -
              </h4>
              <p className="text-gray-700 underline decoration-2 underline-offset-8">
                Top-tier privacy and on-chain proof, without leaking sensitive
                data.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mt-32 mb-16">
          <div className="mx-auto">
            <img
              src="/images/feature-image.png"
              alt="Web3 Password Management Process"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
