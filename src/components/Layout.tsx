import { JobFilters } from "./JobFilters/JobFilters";
import { JobOpenings } from "./JobOpenings/JobOpenings";
import "./Layout.scss";

export const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div className="header">
        <JobFilters />
      </div>
      <div className="main-container">
        <JobOpenings />
      </div>
      <div className="footer"></div>
    </div>
  );
};
