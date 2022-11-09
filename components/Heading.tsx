import { THEMES } from "../styles/variables";

export function Heading({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <h1>
      <style jsx global>
        {`
          .heading-text {
            position: relative;
          }

          .heading-text::after {
            position: absolute;
            content: "";
            display: block;
            background-color: ${THEMES.common.accent};
            height: 4px;
            bottom: -6px;
            left: 8px;
            right: 8px;
            transition: all 0.2s;
            z-index: 1;
          }
        `}
      </style>
      <span className="heading-text">{children}</span>
    </h1>
  );
}
