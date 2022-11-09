import { useCallback, useEffect } from "react";
import { THEMES } from "../styles/variables";
import { Emphasize } from "./Emphasize";
import { FadeIntoView } from "./FadeIntoView";

export function Splash(): JSX.Element {
  const scrollToContent = useCallback(() => {
    document
      .querySelector("header")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const spotlightEl = document.querySelector<HTMLDivElement>("#splash-image");
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { scrollY, innerHeight } = window;

      if (spotlightEl && scrollY < innerHeight) {
        const mask = `
          radial-gradient(
            circle at ${clientX}px ${clientY + scrollY}px,
            rgba(0, 0, 0, 0.933) 30px,
            rgba(0, 0, 0, 0) 450px
          )`;

        spotlightEl.style.mask = mask;
        spotlightEl.style.webkitMask = mask; // Required for Chrome even though it says it's deprecated
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="splash">
      <style jsx>{`
        .splash {
          color: ${THEMES.dark.text};
        }

        .splash-image-container {
          width: 100vw;
          height: 100vh;
          max-width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10%;
          background-color: ${THEMES.dark.bg};
        }

        .splash-image {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url("/splash.webp");
          background-size: cover;
          mask: radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0.933) 10px,
            rgba(0, 0, 0, 0) 500px
          );
        }

        .splash-text {
          font-size: 36px;
          text-align: center;
        }

        .chevron {
          text-align: center;
          cursor: pointer;
        }

        .chevron-icon {
          margin-left: -64px;
          position: absolute;
          bottom: 0;
          animation: bounce 10s infinite;
        }

        @keyframes bounce {
          0%,
          5%,
          9%,
          10%,
          100% {
            transform: translateY(0);
          }
          4% {
            transform: translateY(-20px);
          }
          7% {
            transform: translateY(-12px);
          }
        }

        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="splash-image-container">
        <div className="splash-image" id="splash-image"></div>
        <FadeIntoView>
          <div className="splash-text">
            <Emphasize text="Hello! I'm a {{full stack developer}}." />
          </div>
        </FadeIntoView>
      </div>

      <div className="chevron" onClick={() => scrollToContent()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          fill="currentColor"
          className="chevron-icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
