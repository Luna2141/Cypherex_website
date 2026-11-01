"use client";

import ArrowDivider from "./arrow-divider";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const items = [
  { name: "XChaCha20-Poly1305", note: "Authenticated encryption for your vault" },
  { name: "Argon2id", note: "Memory-hard key stretching for your passphrase" },
  { name: "FIDO2 security keys", note: "An optional hardware second factor" },
];

function Item({ name, note }: { name: string; note: string }) {
  const animation = useScrollAnimation<HTMLLIElement>();
  return (
    <li
      ref={animation.ref}
      className={`flex flex-col gap-2 animate-slide-up ${animation.isVisible ? "is-visible" : ""
        }`}
    >
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black underline decoration-2 underline-offset-8">
        {name}
      </span>
      <span className="text-lg sm:text-xl md:text-2xl font-light text-gray-700">
        {note}
      </span>
    </li>
  );
}

export default function BuiltWith() {
  const titleAnimation = useScrollAnimation();

  return (
    <div className="w-full relative py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <ArrowDivider />
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div
            ref={titleAnimation.ref}
            className={`animate-slide-up ${titleAnimation.isVisible ? "is-visible" : ""
              }`}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-light text-center mb-8 sm:mb-12 md:mb-16 text-black underline decoration-2 underline-offset-8">
              Built With
            </h2>
          </div>
          <ul className="space-y-10 sm:space-y-14 md:space-y-16 max-w-3xl mx-auto">
            {items.map((item) => (
              <Item key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
