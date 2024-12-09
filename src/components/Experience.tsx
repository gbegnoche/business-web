import IndiumLogo from "../assets/images/indium-icon.jpeg";
import TechngsLogo from "../assets/images/techngs-icon.jpeg";
import CoveyLogo from "../assets/images/covey-icon.jpeg";

export type JobData = {
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  chips?: string[];
};

const jobs: JobData[] = [
  {
    title: "Indium Corporation",
    subtitle: "2024 - present",
    description:
      "Rebuilding legacy application from the ground up to modernize company infrastructure. Working with sites globally to coordinate app deployment.",
    logo: IndiumLogo,
    chips: [
      "HTML",
      "CSS",
      "Blazor",
      "C#",
      "SQL",
      "Azure",
      "Visual Studio",
      "Systems Integration",
    ],
  },
  {
    title: "Technergetics, LLC",
    subtitle: "2022 - 2024",
    description:
      "Led a team of software engineers building an application for the US Air Force. Determined the way forward for team members to ensure application was delivered on time and met quality standards as well as business needs.",
    logo: TechngsLogo,
    chips: [
      "HTML",
      "CSS",
      "React",
      "Node",
      "Jest",
      "GraphQL",
      "Docker",
      "Figma",
      "Lucid",
    ],
  },
  {
    title: "Covey Computer Software",
    subtitle: "2018 - 2021",
    description:
      "Worked with multiple clients to determine business needs and deliver software solutions. Projects included transitioning customers from legacy software, research and development on a hardware solution for tracking manufacturing processes, and even a company-sponsored game jam.",
    logo: CoveyLogo,
    chips: ["HTML", "CSS", "JavaScript", "React", "Node", "Jest"],
  },
];

const generateJobContainer = ({
  title,
  subtitle,
  description,
  logo,
  chips,
}: JobData) => (
  <div className="job-container" key={title}>
    <span className="no-wrap">
      {logo && <img className="logo" src={logo} />}
      <div>
        <h5>{title}</h5>
        <h6 className="subtitle">{subtitle}</h6>
      </div>
    </span>
    <p>{description}</p>
    <span>
      {chips &&
        chips.map((text) => (
          <div key={text} className="chip">
            {text}
          </div>
        ))}
    </span>
  </div>
);

export const Experience = () => (
  <div id="experience-container">
    <h4>Experience</h4>
    {jobs.map((job) => generateJobContainer(job))}
  </div>
);

export default Experience;
