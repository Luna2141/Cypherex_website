import Image from "next/image";
import ArrowDivider from "./arrow-divider";

export default function BuiltOnBase() {
  return (
    <div className="w-full relative py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <ArrowDivider />

        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 relative">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-light text-center mb-4 sm:mb-6 md:mb-8 text-black underline decoration-2 underline-offset-8">
              Built On
            </h2>

            <div className="flex justify-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
              <Image
                src="/images/base-logo.png"
                alt="BASE logo"
                width={600}
                height={160}
                className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-contain"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-start">
            {/* First column: Bullet points */}
            <div className="flex flex-col mt-4 sm:mt-8 md:mt-12 lg:mt-16 order-2 md:order-1">
              <ul className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 sm:mb-12 md:mb-16">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Low Fees
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Fast Finality
                  </span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full"></span>
                  <span className="font-light text-black underline decoration-2 underline-offset-8">
                    Secure Infrastructure
                  </span>
                </li>
              </ul>
            </div>

            {/* Second column: Spiral image */}
            <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <Image
                src="/images/base-spiral.png"
                alt="Base spiral"
                width={400}
                height={400}
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
