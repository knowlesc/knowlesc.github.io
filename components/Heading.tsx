import { THEMES } from "../styles/variables";

export function Heading({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <h1>
      <style jsx global>
        {`
          .heading-text {
          }
        `}
      </style>
      <span className="heading-text">{children}</span>
    </h1>
  );
}
