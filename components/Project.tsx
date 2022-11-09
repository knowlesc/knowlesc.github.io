import { THEMES } from "../styles/variables";
import { Carousel } from "./Carousel";
import { ExternalLinkText } from "./ExternalLinkText";
import { Heading } from "./Heading";

type Props = {
  reverse?: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
  imageSrcs: string[];
  links: Array<{ url: string; text: string }>;
};

export function Project({
  reverse,
  title,
  description,
  imageSrcs,
  links,
}: Props): JSX.Element {
  return (
    <div className="project">
      <style jsx>
        {`
          .project {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            gap: 50px;
            flex-direction: ${reverse ? "row-reverse" : ""};
            margin-bottom: 150px;
          }

          .project:not(:first-child) {
            margin-top: 150px;
          }

          .project-description {
            min-width: 200px;
            flex-basis: 40%;
            line-height: 30px;
          }

          .project-links {
            margin-top: 50px;
            text-align: center;
            display: flex;
            flex-flow: column nowrap;
            gap: 15px;
          }

          .project-image {
            flex: 0 0 60%;
            height: 600px;
            position: relative;
            padding: 10px;
          }

          .project-image-background {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: repeating-linear-gradient(
                45deg,
                ${THEMES.light.imageBorder} 25%,
                transparent 25%,
                transparent 75%,
                ${THEMES.light.imageBorder} 75%,
                ${THEMES.light.imageBorder}
              ),
              repeating-linear-gradient(
                45deg,
                ${THEMES.light.imageBorder} 25%,
                transparent 25%,
                transparent 75%,
                ${THEMES.light.imageBorder} 75%,
                ${THEMES.light.imageBorder}
              );
            background-position: 0 0, 10px 10px;
            background-size: calc(2 * 10px) calc(2 * 10px);
            opacity: 0.3;
          }

          @media (max-width: 800px) {
            .project {
              flex-flow: column nowrap;
            }
          }
        `}
      </style>
      <div className="project-image">
        <div className="project-image-background" />
        <Carousel images={imageSrcs} reverse={reverse} />
      </div>
      <div className="project-description">
        <Heading>{title}</Heading>
        {description}
        <div className="project-links">
          {links.map(({ text, url }, i) => (
            <span key={text}>
              <ExternalLinkText text={text} url={url} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
