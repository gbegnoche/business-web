import indium from "../assets/images/indium-icon.jpeg";
import techngs from "../assets/images/techngs-icon.jpeg";
import covey from "../assets/images/covey-icon.jpeg";

export type Work = {
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  content?: React.ReactNode;
  chips?: string[];
};

const workList: Work[] = [
  {
    logo: indium,
    title: "Indium Corporation of America",
    subtitle: "2024 - present",
    description:
      "Rebuilding legacy application from the ground up to modernize company infrastructure. Working with sites globally to coordinate app deployment.",
    chips: ["HTML", "CSS", "Blazor", "C#", "SQL", "Systems Integration"],
  },
  {
    logo: techngs,
    title: "Technergetics, LLC",
    subtitle: "2022 - 2024",
    description:
      "Led a team of software engineers building an application for the US Air Force. Determined the way forward for team members to ensure application was delivered on time and met quality standards as well as business needs.",
    chips: ["HTML", "CSS", "React", "Node", "Jest", "GraphQL", "Docker"],
  },
  {
    logo: covey,
    title: "Covey Computer Software",
    subtitle: "2018 - 2021",
    description:
      "Worked with multiple clients to determine business needs and deliver software solutions. Projects included transitioning customers from legacy software, research and development on a hardware solution for tracking manufacturing processes, and even a company-sponsored game jam.",
    chips: ["HTML", "CSS", "JavaScript", "React", "Node", "Jest"],
  },
];

const generateWork = ({
  title,
  subtitle,
  description,
  logo,
  content,
  chips,
}: Work) => (
  <div className="work-container" key={title}>
    <span>
      {logo && <img className="logo" src={logo} />}
      <div>
        <h5 className="body-heading">{title}</h5>
        <h6 className="subtitle">{subtitle}</h6>
        {content}
        <p>{description}</p>
        <span className="chips-container">
          {chips &&
            chips.map((text) => (
              <div key={text} className="chip">
                {text}
              </div>
            ))}
        </span>
      </div>
    </span>
  </div>
);

export const Projects = () => {
  return (
    <>
      <span>{workList.map((project) => generateWork(project))}</span>
    </>
  );
};

export default Projects;
