import Link from "next/link";
import { THEMES, HEIGHTS } from "../styles/variables";
import { Emphasize } from "./Emphasize";

export function Navigation(): JSX.Element {
  return (
    <header>
      <style jsx>{`
        header {
          background: ${THEMES.light.header};
          height: ${HEIGHTS.HEADER};
          color: ${THEMES.light.textAlt};
          padding: 0 10%;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0px;
          z-index: 1000;
        }

        .nav-right {
          margin-left: auto;
          display: flex;
          padding-left: 15px;
        }

        @media (prefers-color-scheme: dark) {
          header {
            background: ${THEMES.dark.header};
            color: ${THEMES.dark.textAlt};
          }
        }
      `}</style>
      <h1>
        <Emphasize text="{{Colin Knowles}}" />
      </h1>
      {false && (
        <nav>
          <Link href="/">Item 1</Link>
          <Link href="/">Item 2</Link>
          <Link href="/">Item 3</Link>
        </nav>
      )}

      <div className="nav-right"></div>
    </header>
  );
}
