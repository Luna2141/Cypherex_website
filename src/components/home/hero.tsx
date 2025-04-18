import Image from "next/image";

export default function Hero() {
  return (
    <div className="mx-48 relative overflow-hidden h-screen">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/images/hero-background.svg"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <h1
          className="text-7xl md:text-9xl font-light mb-4"
          style={{
            background:
              "linear-gradient(to right, #F6BCFF 0%, #FF9EFB 33%, #AE9AFF 67%, #B1D0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.25))",
          }}
        >
          Cypherex
        </h1>
        <p
          className="text-2xl md:text-5xl font-light pt-14"
          style={{
            background:
              "linear-gradient(to right, #F6BCFF 0%, #FF9EFB 33%, #AE9AFF 67%, #B1D0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.25))",
          }}
        >
          A new way to Secure
        </p>
      </div>
    </div>
  );
}
