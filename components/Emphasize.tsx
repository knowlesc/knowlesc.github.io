import { THEMES } from "../styles/variables";

type Props = {
  text: string;
};

export function Emphasize({ text }: Props): JSX.Element {
  return (
    <span>
      <style jsx global>
        {`
          .attention {
            background-size: 100px;
            background: ${THEMES.common.primary};
            color: ${THEMES.light.text};
          }
        `}
      </style>
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(
            /{{(.*?)}}/g,
            '<span class="attention">$1</span>'
          ),
        }}
      ></span>
    </span>
  );
}
