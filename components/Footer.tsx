import { THEMES, HEIGHTS } from "../styles/variables";

export function Footer(): JSX.Element {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            min-height: ${HEIGHTS.FOOTER};
            background: ${THEMES.light.footer};
            color: ${THEMES.light.textAlt};
            padding: 50px 10%;
            text-align: center;
          }

          img {
            width: 48px;
            margin: 0 5px;
          }

          .dark {
            display: none;
          }

          @media (prefers-color-scheme: dark) {
            footer {
              background: ${THEMES.dark.footer};
              color: ${THEMES.dark.textAlt};
            }

            .light {
              display: none;
            }

            .dark {
              display: initial;
            }
          }
        `}
      </style>

      <a
        href="https://www.linkedin.com/in/knowlesc/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="linkedin-light.png"
          alt="My LinkedIn profile"
          className="light"
        />
        <img
          src="linkedin-dark.png"
          alt="My LinkedIn profile"
          className="dark"
        />
      </a>
      <a href="https://github.com/knowlesc" target="_blank" rel="noreferrer">
        <img src="github-light.png" alt="My GitHub profile" className="light" />
        <img src="github-dark.png" alt="My GitHub profile" className="dark" />
      </a>
    </footer>
  );
}
