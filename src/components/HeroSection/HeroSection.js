// components/HeroSection.tsx

import Link from "next/link";
import Title from "./HeroSectionTitle"; // Adjust the import path as necessary
import Subtitle from "./HeroSectionSubTitle"; // Adjust the import path as necessary

const HeroSection = ({titleText, subtitleText}) => {

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <Title text={titleText} />
          <Subtitle text={subtitleText} />
          <div className="flex justify-center space-x-4 mt-4">
            <button className="btn btn-secondary">
              <Link href="/dashboard">Dashboard</Link>
            </button>
            <button className="btn btn-outline btn-secondary">
              <Link href="/catalogue">Catalogue</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
  