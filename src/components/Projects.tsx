export type Project = {
  title: string;
  subtitle: string;
  content: string;
};

export const Projects = () => {
  const projectList: Project[] = [
    {
      title: "Technergetics, LLC",
      subtitle: "Software Engineer, Team Lead (2022-2024)",
      content:
        "Led a team of software engineers building an application for the US Air Force. Determined the way forward for team members to ensure application was delivered on time and met quality standards as well as business needs.",
    },
    {
      title: "Covey Computer Software",
      subtitle: "Software Engineer (2018-2021)",
      content:
        "Setting up development environments – Responsible for configuring VagrantBox virtual machines for development. Developers could download the virtual machine and immediately start development with a pre-configured environment. Modernizing legacy monolithic software – Converted old inventory tracking system for a customer to use modern JavaScript with React.js. Designing and creating modifications for ERP software – Customer going through ERP transition requires custom forms and database views. Responsible for meeting with the users to determine scope and requirements, designing a system that will meet user needs, and implementing the design into the ERP system. Writing test scripts for internal projects – Tasked with writing scripts for unit testing and end-to-end testing for software developed internally using JavaScript testing framework.",
    },
  ];

  const generateProject = ({ title, subtitle, content }: Project) => (
    <div key={title}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{content}</p>
    </div>
  );

  return projectList.map((project) => generateProject(project));
};

export default Projects;
