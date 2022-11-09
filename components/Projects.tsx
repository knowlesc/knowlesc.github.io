import { Emphasize } from "./Emphasize";
import { Heading } from "./Heading";
import { Project } from "./Project";

export function Projects(): JSX.Element {
  return (
    <section className="projects">
      <Heading>Selected Projects</Heading>
      <Project
        title="Collaborative D&D Map Browser"
        description={
          <Emphasize
            text={
              "Configurable map browser for D&D built with {{React}}, {{TypeScript}}, and {{Leaflet}}, with {{Firebase}} realtime database and {{Google Auth}} integrations. " +
              "Shows location of mouse cursors on the map for anyone currently logged in. " +
              "Includes a ruler to measure distance along a set of points."
            }
          />
        }
        imageSrcs={["projects/dnd-1.png", "projects/dnd-2.png"]}
        links={[
          {
            text: "View on GitHub",
            url: "https://github.com/knowlesc/dnd-map",
          },
        ]}
        reverse={true}
      />

      <Project
        title="Highbank Farms"
        description={
          <Emphasize
            text={
              "Responsive static site built with {{Next.js}} and {{TypeScript}}, deployed on {{Firebase}}."
            }
          />
        }
        imageSrcs={["projects/highbank-1.png", "projects/highbank-2.png"]}
        links={[
          {
            text: "Visit Site",
            url: "https://highbankfarms.com/",
          },
        ]}
      />
      <Project
        title="PUBG Match Tracker"
        description={
          <Emphasize
            text={
              "Retrieves and processes post-match stats from the PUBG API using {{Node.js}} and {{TypeScript}}, deployed on {{Heroku}}. " +
              "Uses {{CanvasJS}} to generate an image showing interesting match information, and {{Discord.js}} to send post-match info to Discord"
            }
          />
        }
        imageSrcs={[
          "projects/pubg-1.png",
          "projects/pubg-2.png",
          "projects/pubg-3.png",
        ]}
        links={[
          {
            text: "View on GitHub",
            url: "https://github.com/knowlesc/pubg-discord-bot",
          },
        ]}
        reverse={true}
      />

      <Project
        title="Scattergories Generator"
        description={
          <Emphasize
            text={
              "A configurable Scattergories list generator and timer built using {{React}}, {{Webpack}}, {{Sass}}, and {{TypeScript}}."
            }
          />
        }
        imageSrcs={["projects/scattergories-1.png"]}
        links={[
          {
            text: "View on GitHub",
            url: "https://github.com/knowlesc/scattergories-generator",
          },
          {
            text: "Visit Site",
            url: "https://knowlesc.github.io/scattergories-generator/",
          },
        ]}
      />

      <Project
        title="Bingo Generator"
        description={
          <Emphasize
            text={
              "Generates randomized bingo cards from a provided set of images using {{React}} and {{TypeScript}}."
            }
          />
        }
        imageSrcs={["projects/bingo-1.png", "projects/bingo-2.png"]}
        links={[
          {
            text: "View on GitHub",
            url: "https://github.com/knowlesc/bingo-generator",
          },
        ]}
        reverse={true}
      />

      <Project
        title="SimonT Hockey Sim UI/API"
        description={
          <Emphasize
            text={
              "{{Express.js}} API and custom {{SQLite}} driver that can read from large generated hockey simulator database. " +
              "{{AngularJS}} UI serves as a hub for statistics, schedules, standings, and ratings."
            }
          />
        }
        imageSrcs={[
          "projects/simont-1.png",
          "projects/simont-2.png",
          "projects/simont-3.png",
        ]}
        links={[
          {
            text: "View on GitHub (UI)",
            url: "https://github.com/knowlesc/sths-frontend",
          },
          {
            text: "View on GitHub (API)",
            url: "https://github.com/knowlesc/sths-web-api",
          },
        ]}
      />
    </section>
  );
}
