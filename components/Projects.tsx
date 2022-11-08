import { THEMES } from "../styles/variables";
import { Project } from "./Project";

export function Projects(): JSX.Element {
  return (
    <section className="projects">
      <Project
        title="Project 1"
        description="PRoject 1 description"
        imageAlt="Project image"
        imageSrc="placeholder.webp"
      />
      <Project
        title="Project 2"
        description="PRoject 2 description"
        imageAlt="Project image"
        imageSrc="placeholder.webp"
        reverse={true}
      />
    </section>
  );
}
