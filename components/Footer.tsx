import { COLORS, HEIGHTS } from "../styles/variables";

export function Footer(): JSX.Element {
  return (
    <footer>
      <style jsx>
        {`
          footer {
            min-height: ${HEIGHTS.FOOTER};
            background: ${COLORS.DARK};
            color: ${COLORS.LIGHT};
            padding: 50px 10%;
          }
        `}
      </style>
      Footer
    </footer>
  );
}
