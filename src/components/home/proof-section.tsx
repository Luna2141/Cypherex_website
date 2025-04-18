import Image from "next/image";
import ArrowDivider from "./arrow-divider";

export default function ProofSection() {
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lower-grid.png"
          alt="Grid background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ArrowDivider />

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-center my-12 sm:my-16 md:my-24 lg:my-32 text-black underline decoration-2 underline-offset-8">
            Proof, Not Promises
          </h2>

          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin mb-2 text-black underline decoration-2 underline-offset-8">
              Leveraging{" "}
              <span className="font-light text-black underline decoration-2 underline-offset-8">
                ZK Proofs
              </span>{" "}
              <br className="hidden sm:block" />
              for a more{" "}
              <span className="font-light text-black underline decoration-2 underline-offset-8">
                secure
              </span>{" "}
              <br className="hidden sm:block" />
              future.
            </h3>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-4 sm:gap-6 md:items-end pb-16 sm:pb-20 md:pb-24 lg:pb-32">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Batch it -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  Batch upload your Passwords in one go.
                </span>
              </p>
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Prove It -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  ZK Rollup creates a privacy-preserving proof.
                </span>
              </p>
            </div>

            <div className="w-full md:w-3/4 lg:w-2/3">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Post It -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  Everything gets stored securely on Base.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
