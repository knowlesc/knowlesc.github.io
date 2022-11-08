import { HEIGHTS } from "../styles/variables";
import { Projects } from "./Projects";

export function MainSection(): JSX.Element {
  return (
    <main>
      <style jsx>
        {`
          main {
            margin-top: ${HEIGHTS.HEADER};
            min-height: 100vh;
            padding: 50px 10%;
          }
        `}
      </style>
      <Projects />
    </main>
  );
}
