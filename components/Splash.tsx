import { useCallback } from "react";
import { THEMES } from "../styles/variables";
import { Emphasize } from "./Emphasize";

export function Splash(): JSX.Element {
  const scrollToContent = useCallback(() => {
    document
      .querySelector("header")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="splash">
      <style jsx>{`
        .splash {
          color: ${THEMES.light.textAlt};
        }

        .splash-image {
          width: 100vw;
          height: 100vh;
          max-width: 100%;
          background-image: url("/splash.webp");
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10%;
        }

        .splash-text {
          font-size: 36px;
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
      `}</style>

      <div className="splash-image">
        <div className="splash-text">
          <Emphasize text="Hello! I'm a {{full stack developer}}." />
        </div>
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
