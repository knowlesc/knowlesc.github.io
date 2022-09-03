import { HEIGHTS } from "../styles/variables";
import { Heading } from "./Heading";

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
      <Heading>Welcome</Heading>
      <p>{`I haven't added anything here yet, but I will soon!`}</p>
    </main>
  );
}
