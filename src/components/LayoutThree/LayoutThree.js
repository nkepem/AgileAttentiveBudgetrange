import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import HeroSection from "@components/HeroSection";
import styles from "./Layout.module.scss";
import HeroSectionAlt from "../HeroSectionAlt";


const titleText = "Catalogue des instruments Juridiques.";
const subtitleText = "Une bibliothèque de documents actualisés."
 


const LayoutThree = ({ leftContent, mainContent, rightContent, className, ...rest }) => {
  return (
    <div className= {`${styles.layout} ${className}`} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSectionAlt 
         titleText={titleText}
         subtitleText={subtitleText}
        />
      <main className={`${styles.main} container mx-auto px-4`}>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="p-4 bg-base-100 rounded-lg shadow-md">
              {leftContent}
            </div>
          </aside>

          {/* Main Column */}
          <section className="col-span-12 lg:col-span-6">
            <div className="p-4 bg-base-100 rounded-lg shadow-md">
              {mainContent}
            </div>
          </section>

          {/* Right Column */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="p-4 bg-base-100 rounded-lg shadow-md">
              {rightContent}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutThree;
