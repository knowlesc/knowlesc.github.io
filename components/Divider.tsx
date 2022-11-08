import { useCallback, useEffect, useRef, useState } from "react";
import { THEMES } from "../styles/variables";

export function Divider(): JSX.Element {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const updateTransparency = useCallback(() => {
    if (ref.current) {
      const value = Math.max(
        0,
        Math.floor(
          ((window.innerHeight - ref.current.getBoundingClientRect().top) /
            window.innerHeight) *
            100
        )
      );

      setProgress(value);
    }
  }, [setProgress]);

  useEffect(() => {
    updateTransparency();

    window.removeEventListener("scroll", updateTransparency);
    window.addEventListener("scroll", updateTransparency);

    return () => {
      window.removeEventListener("scroll", updateTransparency);
    };
  }, [updateTransparency]);

  return (
    <div ref={ref} className="squiggle">
      <style jsx>{`
        div {
          width: ${progress}%;
          height: 10px;
          margin: 0 auto;
          transition: all 0.1s;
          background-color: ${THEMES.light.divider};
        }

        @media (prefers-color-scheme: dark) {
          div {
            background-color: ${THEMES.dark.divider};
          }
        }
      `}</style>
    </div>
  );
}
