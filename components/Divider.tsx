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
    <div ref={ref}>
      <style jsx>{`
        div {
          width: ${progress}%;
          background-color: ${THEMES.common.accent};
          height: 4px;
          margin: 0 auto;
          transition: all 0.1s;
        }
      `}</style>
    </div>
  );
}
