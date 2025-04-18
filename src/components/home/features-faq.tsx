"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function FeaturesFaq() {
  const titleAnimation = useScrollAnimation();
  const flowerAnimation = useScrollAnimation();
  const feature1Animation = useScrollAnimation();
  const feature2Animation = useScrollAnimation();
  const feature3Animation = useScrollAnimation();
  const faqTitleAnimation = useScrollAnimation();
  const faq1Animation = useScrollAnimation();
  const faq2Animation = useScrollAnimation();
  const faq3Animation = useScrollAnimation();

  return (
    <div className="w-full relative py-10 sm:py-16 md:py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gradient-background.webp"
          alt="Gradient background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="absolute top-0 w-full z-0 pointer-events-none select-none">
        <div className="relative w-full">
          <img
            src="/images/wave-line2.svg"
            alt="Wavy line"
            className="w-full h-auto object-contain max-w-full"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-32 sm:mt-48 md:mt-64 lg:mt-96">
        <div className="mx-auto">
          <div
            ref={titleAnimation.ref}
            className={`animate-slide-up ${
              titleAnimation.isVisible ? "is-visible" : ""
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin text-center mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-black underline decoration-2 underline-offset-8">
              Minimalist by Design. Powerful by Default.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            {/* Left side - Purple spiral */}
            <div
              ref={flowerAnimation.ref}
              className={`flex justify-center md:justify-start animate-slide-up ${
                flowerAnimation.isVisible ? "is-visible" : ""
              }`}
            >
              <Image
                src="/images/purple-flower.png"
                alt="Purple spiral"
                width={400}
                height={400}
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] h-auto object-contain"
              />
            </div>

            {/* Right side - Features */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-8 sm:mt-12 md:mt-16 lg:mt-24">
              <div
                ref={feature1Animation.ref}
                className={`animate-slide-up ${
                  feature1Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                  Simple UI -
                  <span className="font-light text-black">
                    {" "}
                    Clear and Concise UI to offer a better user experience.
                  </span>
                </p>
              </div>

              <div
                ref={feature2Animation.ref}
                className={`animate-slide-up ${
                  feature2Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                  Easy Onboarding -
                  <span className="font-normal text-black">
                    {" "}
                    Utilizing Ethereum to bring easy access security to
                    everyone.
                  </span>
                </p>
              </div>

              <div
                ref={feature3Animation.ref}
                className={`animate-slide-up ${
                  feature3Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                  Feels Like Magic -
                  <span className="font-normal text-black">
                    {" "}
                    Have a Web2 Experience on a Web3 Product.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 max-w-6xl mx-auto">
            <div
              ref={faqTitleAnimation.ref}
              className={`animate-slide-up ${
                faqTitleAnimation.isVisible ? "is-visible" : ""
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-black underline decoration-2 underline-offset-8">
                FAQ
              </h2>
            </div>

            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
              <div
                ref={faq1Animation.ref}
                className={`animate-slide-up ${
                  faq1Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-3 md:mb-4 text-black underline decoration-2 underline-offset-8">
                  How is my Data secured?
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black">
                  Data is secured through ZK rollups and standardized Encryption
                  methods.
                </p>
              </div>

              <div
                ref={faq2Animation.ref}
                className={`animate-slide-up ${
                  faq2Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-3 md:mb-4 text-black underline decoration-2 underline-offset-8">
                  Can I remove Passwords?
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black">
                  All Login Information can be removed within the application
                  software.
                </p>
              </div>

              <div
                ref={faq3Animation.ref}
                className={`animate-slide-up ${
                  faq3Animation.isVisible ? "is-visible" : ""
                }`}
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-3 md:mb-4 text-black underline decoration-2 underline-offset-8">
                  What platforms are supported?
                </h3>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-black">
                  Currently we are supporting only desktop and laptop browsers
                  with plans of adding mobile support in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
