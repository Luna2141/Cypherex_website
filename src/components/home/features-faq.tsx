import Image from "next/image";

export default function FeaturesFaq() {
  return (
    <div className="w-full relative py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gradient-background.png"
          alt="Gradient background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="absolute top-0 w-full h-fit z-0 pointer-events-none select-none">
        <img src="/images/wave-line2.png" alt="Wavy line" className="top-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-96">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-6xl font-thin text-center mb-24 text-black underline decoration-2 underline-offset-8">
            Minimalist by Design. Powerful by Default.
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Left side - Purple spiral */}
            <div className="flex justify-start">
              <Image
                src="/images/purple-flower.png"
                alt="Purple spiral"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            {/* Right side - Features */}
            <div className="space-y-12 text-4xl mt-24">
              <div>
                <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                  Simple UI -
                  <span className="font-light text-black">
                    {" "}
                    Clear and Concise UI to offer a better user experience.
                  </span>
                </p>
              </div>

              <div>
                <p className="font-medium mb-2 text-black underline decoration-2 underline-offset-8">
                  Easy Onboarding -
                  <span className="font-normal text-black">
                    {" "}
                    Utilizing Ethereum to bring easy access security to
                    everyone.
                  </span>
                </p>
              </div>

              <div>
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
          <div className="mb-24 max-w-6xl mx-auto">
            <h2 className="text-6xl font-medium mb-24 text-black underline decoration-2 underline-offset-8">
              FAQ
            </h2>

            <div className="space-y-32">
              <div>
                <h3 className="text-5xl font-medium mb-4 text-black underline decoration-2 underline-offset-8">
                  How is my Data secured?
                </h3>
                <p className="text-4xl font-light text-black">
                  Data is secured through ZK rollups and standardized Encryption
                  methods.
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-medium mb-4 text-black underline decoration-2 underline-offset-8">
                  Can I remove Passwords?
                </h3>
                <p className="text-4xl font-light text-black">
                  All Login Information can be removed within the application
                  software.
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-medium mb-4 text-black underline decoration-2 underline-offset-8">
                  What platforms are supported?
                </h3>
                <p className="text-4xl font-light text-black">
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
