export type Project = {
  title: string;
  subtitle: string;
  description: string;
  content?: React.ReactNode;
};

export const Projects = () => {
  const projectList: Project[] = [
    {
      title: "Technergetics, LLC",
      subtitle: "Software Engineer, Team Lead (2022-2024)",
      description:
        "Led a team of software engineers building an application for the US Air Force. Determined the way forward for team members to ensure application was delivered on time and met quality standards as well as business needs.",
    },
    {
      title: "Covey Computer Software",
      subtitle: "Software Engineer (2018-2021)",
      description:
        "Worked with multiple clients to determine business needs and deliver software solutions. Projects included transitioning customers from legacy software, research and development on a hardware solution for tracking manufacturing processes, and even a company-sponsored game jam.",
    },
  ];

  const generateProject = ({
    title,
    subtitle,
    description,
    content,
  }: Project) => (
    <div key={title} className="project-container">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {content}
      <p>{description}</p>
    </div>
  );

  return projectList.map((project) => generateProject(project));
};

export default Projects;
