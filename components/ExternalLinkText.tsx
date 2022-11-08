import { THEMES } from "../styles/variables";

type Props = {
  text: string;
  url: string;
};

export function ExternalLinkText({ text, url }: Props): JSX.Element {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <style jsx>{`
        a {
          position: relative;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.2s;
        }

        a:hover {
          font-size: 17px;
        }

        a::after {
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

        a:hover::after {
          left: -8px;
          right: -8px;
        }
      `}</style>
      {text}
    </a>
  );
}
