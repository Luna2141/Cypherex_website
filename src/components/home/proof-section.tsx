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
          <h2 className="text-6xl font-thin text-center my-32 text-black underline decoration-2 underline-offset-8">
            Proof, Not Promises
          </h2>

          <div className="mb-16">
            <h3 className="text-3xl md:text-6xl font-thin mb-2 text-black underline decoration-2 underline-offset-8">
              Leveraging{" "}
              <span className="font-light text-black underline decoration-2 underline-offset-8">
                ZK Proofs
              </span>{" "}
              <br />
              for a more{" "}
              <span className="font-light text-black underline decoration-2 underline-offset-8">
                secure
              </span>{" "}
              <br />
              future.
            </h3>
          </div>

          <div className="text-4xl flex flex-col gap-6 items-end pb-32">
            <div className="w-xl">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Batch it -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  Batch upload your Passwords in one go.
                </span>
              </p>
            </div>

            <div className="w-xl">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Prove It -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  ZK Rollup creates a privacy-preserving proof.
                </span>
              </p>
            </div>

            <div className="w-xl">
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Post It -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
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
