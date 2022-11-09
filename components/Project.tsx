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
            gap: 75px;
            flex-direction: ${reverse ? "row-reverse" : ""};
            margin-bottom: 150px;
          }

          .project:not(:first-child) {
            margin-top: 150px;
          }

          .project-description {
            min-width: 200px;
            flex-basis: 45%;
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
            flex: 0 0 55%;
            height: 600px;
            position: relative;
            padding: 10px;
          }

          .project-image-background {
            position: absolute;
            top: -30px;
            bottom: 0;
            left: -30px;
            right: 0;
            opacity: 0.4;
            background-color: ${THEMES.common.accent};
            z-index: -1;
          }

          .project-image::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: -30px;
            left: 0;
            right: -30px;
            opacity: 0.4;
            background-color: ${THEMES.light.imageBorder};
            z-index: -1;
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
