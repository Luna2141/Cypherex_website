import Image from "next/image";
import ArrowDivider from "./arrow-divider";

export default function BuiltOnBase() {
  return (
    <div className="w-full relative py-20">
      <div className="container mx-auto px-4">
        <ArrowDivider />

        <div className="max-w-7xl mx-auto my-20 relative">
          <div>
            <h2 className="text-9xl font-light text-center mb-8 text-black underline decoration-2 underline-offset-8">
              Built On
            </h2>

            <div className="flex justify-center mb-20">
              <Image
                src="/images/base-logo.png"
                alt="BASE logo"
                width={600}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 items-start">
            {/* Second column: Bullet points and spiral image in flex container */}
            <div className="flex flex-col mt-30">
              <ul className="space-y-24 text-6xl mb-16">
                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Low Fees
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Fast Finality
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="w-3 h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Secure Infrastructure
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/base-spiral.png"
                alt="Base spiral"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
