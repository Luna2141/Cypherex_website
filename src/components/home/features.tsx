"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Features() {
  const titleAnimation = useScrollAnimation();
  const headingAnimation = useScrollAnimation();
  const feature1Animation = useScrollAnimation();
  const feature2Animation = useScrollAnimation();
  const feature3Animation = useScrollAnimation();

  return (
    <div className="relative w-full py-10 sm:py-16 md:py-20 bg-white">
      {/* Wavy line visualization using SVG */}
      <div className="absolute top-[15%] xl:top-[10%] w-full z-0 pointer-events-none select-none">
        <div className="relative w-full">
          <img
            src="/images/wave-line.svg"
            alt="Wavy line"
            className="w-full h-auto object-contain max-w-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={titleAnimation.ref}
          className={`animate-slide-up ${titleAnimation.isVisible ? "is-visible" : ""
            }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-center mb-32 sm:mb-48 md:mb-64 lg:mb-96 text-black">
            Passwords are a Pain. We're the Cure.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div
            ref={headingAnimation.ref}
            className={`animate-slide-up ${headingAnimation.isVisible ? "is-visible" : ""
              }`}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 pb-2 text-black underline decoration-2 underline-offset-8">
              Your keys, not ours.
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-8 md:pt-16 lg:pt-24">
            <div
              ref={feature1Animation.ref}
              className={`animate-slide-up ${feature1Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Encrypted on Your Device -
                <span className="font-light text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  XChaCha20-Poly1305 seals your vault before anything leaves it.
                </span>
              </p>
            </div>

            <div
              ref={feature2Animation.ref}
              className={`animate-slide-up ${feature2Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Hardware-Key Unlock -
                <span className="font-light text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  Save time without compromising security by using a Secure Key.
                </span>
              </p>
            </div>

            <div
              ref={feature3Animation.ref}
              className={`animate-slide-up ${feature3Animation.isVisible ? "is-visible" : ""
                }`}
            >
              <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                Recovery You Control -
                <span className="font-light text-gray-700 underline decoration-2 underline-offset-8">
                  {" "}
                  A word-based recovery seed opens your vault if you lose your passphrase or key.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
