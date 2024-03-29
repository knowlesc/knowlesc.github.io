import { THEMES } from "../styles/variables";
import { Carousel } from "./Carousel";
import { ExternalLinkText } from "./ExternalLinkText";
import { FadeIntoView } from "./FadeIntoView";

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
    <FadeIntoView>
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
              margin-bottom: 200px;
            }

            .project {
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
              z-index: -2;
            }

            .project-image::before {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              opacity: 1;
              background: repeating-linear-gradient(
                -45deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2) 20px,
                rgba(20, 20, 20, 0.2) 20px,
                rgba(20, 20, 20, 0.2) 40px
              );
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
              background-color: ${THEMES.common.primary};
              z-index: -2;
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
          <h2>{title}</h2>
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
    </FadeIntoView>
  );
}
