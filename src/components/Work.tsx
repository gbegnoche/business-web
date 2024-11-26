import { work } from "../constants/work";

export type Work = {
  title: string;
  subtitle: string;
  description: string;
  logo?: string;
  content?: React.ReactNode;
  chips?: string[];
};

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

export const Work = () => (
  <div id="work-container">{work.map((job) => generateWork(job))}</div>
);
