import { useCallback, useState } from "react";
import { THEMES } from "../styles/variables";

type Props = {
  images: string[];
  reverse?: boolean;
};

export function Carousel({ images, reverse }: Props): JSX.Element {
  const [index, setIndex] = useState(0);
  console.log(index);

  const prev = useCallback(() => {
    if (images.length <= 1) return;
    setIndex(index === 0 ? images.length - 1 : index - 1);
  }, [index, setIndex, images.length]);

  const next = useCallback(() => {
    if (images.length <= 1) return;
    setIndex(index === images.length - 1 ? 0 : index + 1);
  }, [index, setIndex, images.length]);

  return (
    <div className="carousel">
      <style jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          max-width: 100%;
          min-width: 200px;
          display: block;
        }

        .image-container {
          display: inline-block;
          position: relative;
        }

        .image-container::after {
          content: "";
          display: block;
          position: absolute;
          top: ${reverse ? "-20px" : "20px"};
          left: ${reverse ? "-20px" : "20px"};
          bottom: ${reverse ? "20px" : "-20px"};
          right: ${reverse ? "20px" : "-20px"};
          background-color: ${THEMES.light.imageBorder};
          z-index: -1;
          transition: all 0.2s;
        }

        .carousel:hover .image-container::after {
          top: -20px;
          left: -20px;
          bottom: -20px;
          right: -20px;
        }

        @media (prefers-color-scheme: dark) {
          .image-container::after {
            background-color: ${THEMES.dark.imageBorder};
          }
        }

        button {
          position: absolute;
          color: white;
          z-index: 1;
          top: 50%;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          background-color: ${THEMES.common.accent};
        }

        button path {
          fill: ${THEMES.light.textAlt};
        }

        .left-arrow {
          left: 10px;
        }

        .right-arrow {
          right: 10px;
        }
      `}</style>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="left-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.0303 7.46967C14.3232 7.76256 14.3232 8.23744 14.0303 8.53033L10.5607 12L14.0303 15.4697C14.3232 15.7626 14.3232 16.2374 14.0303 16.5303C13.7374 16.8232 13.2626 16.8232 12.9697 16.5303L8.96967 12.5303C8.67678 12.2374 8.67678 11.7626 8.96967 11.4697L12.9697 7.46967C13.2626 7.17678 13.7374 7.17678 14.0303 7.46967Z" />
            </svg>
          </button>
          <button onClick={next} className="right-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z" />
            </svg>
          </button>
        </>
      )}
      <div>
        {/* ^ This div is needed for the background overlay to display properly */}
        <div className="image-container">
          <img src={images[index]} alt={"Project image"} />
        </div>
      </div>
    </div>
  );
}
