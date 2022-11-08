import { THEMES } from "../styles/variables";
import { ExternalLinkText } from "./ExternalLinkText";
import { Heading } from "./Heading";

type Props = {
  reverse?: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
  imageSrc: string;
  imageAlt: string;
  linkUrl: string;
  linkText: string;
};

export function Project({
  reverse,
  title,
  description,
  imageSrc,
  imageAlt,
  linkUrl,
  linkText,
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

          .project-image {
            flex-basis: 60%;
          }

          img {
            max-width: 100%;
            min-width: 200px;
            display: block;
          }

          .image-container {
            display: inline-block;
            position: relative;
          }

          .image-container::after {
            content: "";
            display: block;
            position: absolute;
            top: ${reverse ? "-20px" : "20px"};
            left: ${reverse ? "-20px" : "20px"};
            bottom: ${reverse ? "20px" : "-20px"};
            right: ${reverse ? "20px" : "-20px"};
            background-color: ${THEMES.light.imageBorder};
            z-index: -1;
            transition: all 0.2s;
          }

          .project-image:hover .image-container::after {
            top: -20px;
            left: -20px;
            bottom: -20px;
            right: -20px;
          }

          @media (prefers-color-scheme: dark) {
            .image-container::after {
              background-color: ${THEMES.dark.imageBorder};
            }
          }

          .project-description {
            min-width: 200px;
            flex-basis: 40%;
            line-height: 30px;
          }

          .project-link {
            margin-top: 50px;
            text-align: center;
          }

          @media (max-width: 800px) {
            .project {
              flex-flow: column nowrap;
            }
          }
        `}
      </style>
      <div className="project-image">
        <div className="image-container">
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
      <div className="project-description">
        <Heading>{title}</Heading>
        {description}
        <div className="project-link">
          <ExternalLinkText text={linkText} url={linkUrl} />
        </div>
      </div>
    </div>
  );
}
