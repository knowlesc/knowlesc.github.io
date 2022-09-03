import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { COLORS, HEIGHTS } from "../styles/variables";

export function Header(): JSX.Element {
  const [transparent, setTransparent] = useState(true);

  const updateTransparency = useCallback(() => {
    if (window.scrollY <= window.innerHeight && !transparent) {
      setTransparent(true);
    }

    if (window.scrollY > window.innerHeight && transparent) {
      setTransparent(false);
    }
  }, [transparent]);

  useEffect(() => {
    updateTransparency();

    window.removeEventListener("scroll", updateTransparency);
    window.addEventListener("scroll", updateTransparency);

    return () => {
      window.removeEventListener("scroll", updateTransparency);
    };
  }, [updateTransparency]);

  return (
    <header>
      <style jsx>{`
        header {
          background-color: transparent;
        }

        .header-nav {
          background: ${COLORS.DARK};
          height: ${HEIGHTS.HEADER};
          color: ${COLORS.LIGHT};
          padding: 0 10%;
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
        }

        .header-nav.transparent {
          background: transparent;
        }

        .splash-image {
          width: 100vw;
          height: 100vh;
          max-width: 100%;
          background-image: url("/splash.webp");
          background-size: cover;
        }
      `}</style>
      <div className={`header-nav ${transparent ? "transparent" : ""}`}>
        <h1>Colin Knowles</h1>
        {false && (
          <nav>
            <Link href="/">Item 1</Link>
            <Link href="/">Item 2</Link>
            <Link href="/">Item 3</Link>
          </nav>
        )}
      </div>
      <div className="splash-image"></div>
    </header>
  );
}
