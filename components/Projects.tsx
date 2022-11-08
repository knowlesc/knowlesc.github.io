import { THEMES } from "../styles/variables";
import { Divider } from "./Divider";
import { Emphasize } from "./Emphasize";
import { Project } from "./Project";

export function Projects(): JSX.Element {
  return (
    <section className="projects">
      <Project
        title="Project 1"
        description="PRoject 1 description"
        imageAlt="Project image"
        imageSrc="https://i.imgur.com/MbnBx1j.png"
        linkText="Read More"
        linkUrl="https://github.com/knowlesc/pubg-discord-bot"
      />
      <Divider />

      <Project
        title="PUBG Match Tracker"
        description={
          <Emphasize
            text={
              "Retrieves and processes post-match stats from the PUBG API using {{Node.js}} and {{TypeScript}}. " +
              "Uses {{CanvasJS}} to generate an image showing interesting match information. " +
              "Uses {{Discord.js}} to send post-match info to Discord. "
            }
          />
        }
        imageAlt="Project image"
        imageSrc="https://i.imgur.com/MbnBx1j.png"
        linkText="Read More"
        linkUrl="https://github.com/knowlesc/pubg-discord-bot"
        reverse={true}
      />
    </section>
  );
}
