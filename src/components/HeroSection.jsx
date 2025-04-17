import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Libre_Caslon_Text, Schibsted_Grotesk } from "next/font/google";
import "./HeroSection.css";

gsap.registerPlugin(ScrollTrigger);

// Add custom font using CSS
const gtAlpinaFontStyle = `
  @font-face {
    font-family: 'GT-Alpina';
    src: url('/GT-Alpina-Standard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

const GTAlpinaFontStyleItalics = `
  @font-face {
    font-family: 'GT-Alpina-Italic';
    src: url('/GT-Alpina-Standard-Italic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }
`;
const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const schibstedGrotesk = Schibsted_Grotesk({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const HeroSection = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const sections = gsap.utils.toArray(".landscape-section");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: 1,
  //       end: "+=3000",
  //     },
  //   });
  // }, []);

  return (
    <>
      {/* Inject the custom font style */}
      <style dangerouslySetInnerHTML={{ __html: gtAlpinaFontStyle }} />
      <style dangerouslySetInnerHTML={{ __html: GTAlpinaFontStyleItalics }} />
      <div
        className={`hero-container ${schibstedGrotesk.className}`}
        ref={containerRef}
      >
        <div className="left-column">
          {/* Header with logo and release info - moved inside left column */}
          <header className="site-header">
            <Image src="/plum-logo.svg" alt="plum" width={100} height={100} />
            <div className="release-info">
              <p style={{ width: "fit-content" }}>
                Spring Release <span style={{ color: "#FF4052" }}>'25</span>
              </p>
              <div className="header-line">
                <div className="triangle"></div>
                <div className="line"></div>
                <div className="triangle triangle-flipped"></div>
              </div>
            </div>
          </header>

          <div className="hero-content">
            <div className="flower-container">
              <img src="/flower-shadow.png" alt="" className="flower-shadow" />
              <img src="/flower-stem.png" alt="" className="flower-stem" />
            </div>

            <h1 className="hero-title">
              <div className="title-left">
                <p style={{ fontFamily: "GT-Alpina, serif" }}>In the</p>
                <p style={{ fontFamily: "GT-Alpina, serif" }}>Pink</p>
                <p className="hero-subtitle">
                  At Plum, we're building a healthcare product that puts you
                  first. We're thrilled to share a lineup of releases designed
                  to enhance the way you experience health benefits.
                </p>
              </div>

              <div className="title-right">
                <span className={`text-right`}>of</span>
                <span className={libreCaslon.className}>Health</span>
              </div>
            </h1>
          </div>
        </div>

        <div className="right-column">
          <nav className="table-of-contents">
            <h2>Table of Content</h2>
            <ol>
              <li>
                <a href="#section-0">
                  Enrollment Improvements
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-1">
                  Lifetime Access
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-2">
                  Health Checkups
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-3">
                  Telehealth on Web
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-4">
                  Penny Drop
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-5">
                  Creating CD Statements
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-6">
                  Improved Policy GPT
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-7">
                  Health Stories
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-8">
                  Plum Partner APIs
                  <span className="arrow">→</span>
                </a>
              </li>
              <li>
                <a href="#section-9">
                  Benchmarking
                  <span className="arrow">→</span>
                </a>
              </li>
            </ol>
          </nav>

          <div className="scroll-indicator">
            <span>Scroll</span>
            <span className="arrow">→</span>
          </div>
        </div>

        <div
          id="enrollment-improvement"
          className="content-wrapper"
          style={{ marginLeft: "20px" }}
        >
          <h2>Enrollment Improvements</h2>
        </div>

        {/* Additional landscape sections */}
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="landscape-section" id={`section-${i}`}>
            <video autoPlay muted loop>
              <source src={`/placeholder-video-${i}.mp4`} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
