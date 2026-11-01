"use client";

import Image from "next/image";
import ArrowDivider from "./arrow-divider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ProofSection() {
  const titleAnimation = useScrollAnimation();
  const headingAnimation = useScrollAnimation();
  const point1Animation = useScrollAnimation();
  const point2Animation = useScrollAnimation();
  const point3Animation = useScrollAnimation();

  return (
    <div className="w-full relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lower-grid.webp"
          alt="Grid background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <ArrowDivider />

        <div className="max-w-6xl mx-auto">
          <div
            ref={titleAnimation.ref}
            className={`animate-slide-up ${titleAnimation.isVisible ? "is-visible" : ""
              }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-center my-12 sm:my-16 md:my-24 lg:my-32 text-black underline decoration-2 underline-offset-8">
              Proof, Not Promises
            </h2>
          </div>

          <div
            ref={headingAnimation.ref}
            className={`mb-8 sm:mb-12 md:mb-16 animate-slide-up ${headingAnimation.isVisible ? "is-visible" : ""
              }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin mb-2 text-black underline decoration-2 underline-offset-8">
              Privacy claims are cheap.{" "}
              <br className="hidden sm:block" />
              Ours are{" "}
              <span className="font-light text-black underline decoration-2 underline-offset-8">
                built to be checked.
              </span>
            </h3>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col gap-4 sm:gap-6 md:items-end pb-16 sm:pb-20 md:pb-24 lg:pb-32">
            <div
              ref={point1Animation.ref}
              className={`w-full md:w-3/4 lg:w-2/3 animate-slide-up ${point1Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Sealed -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  Your vault is encrypted on your device. We only ever see ciphertext.
                </span>
              </p>
            </div>

            <div
              ref={point2Animation.ref}
              className={`w-full md:w-3/4 lg:w-2/3 animate-slide-up ${point2Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Tamper-evident -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  Change a single byte of a vault file and it refuses to open.
                </span>
              </p>
            </div>

            <div
              ref={point3Animation.ref}
              className={`w-full md:w-3/4 lg:w-2/3 animate-slide-up ${point3Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-light mb-1 text-black underline decoration-2 underline-offset-8">
                Yours to keep -
                <span className="font-thin text-black underline decoration-2 underline-offset-8">
                  {" "}
                  Export your vault whenever you need to.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
