import React from "react";
import { Text } from "../UI/Text";
import "./JobOpenings.scss";
import { getJobPostings } from "../../utils/api";
import { JobModel } from "../../types/jobs/jobs.model";
import { Button } from "../UI/Button";

export const JobOpenings: React.FC = () => {
  const [jobs, setJobs] = React.useState({} as JobModel);
  const fetchJobs = React.useCallback(async () => {
    await getJobPostings().then((resp) => {
      console.log("response from API: ", resp);
      setJobs(resp);
    });
  }, []);

  React.useEffect(() => {
    fetchJobs();
  }, []);

  const handleCompanyClick = (job: any) => {
    window.open(job?.jdLink, "_blank");
  };

  return (
    <div className="post-container">
      {jobs?.jdList?.map((job: any, index: number) => (
        <div className="item" key={index}>
          <div className="header-text">
            <Text text="⏳ Posted 10 days ago" className="light-text" />
          </div>
          <div className="company-info">
            <img src={job.logoUrl} alt="" />
            <div className="info">
              <Text
                text={job.companyName}
                className="description-small semi-bold third-color company-name"
                onClick={() => handleCompanyClick(job)}
              />
              <Text text={job.jobRole} className="description" />
              <Text text={job.location} className="description-small" />
            </div>
          </div>
          <div className="salary">
            <Text
              text={`Estimated Salary: ${job.salaryCurrencyCode ?? "₹"} ${
                job.minJdSalary ?? "0"
              } - ${job.maxJdSalary} LPA  ✅`}
              className="description-mid fourth-color"
            />
          </div>
          <div className="about">
            <Text text="About Company:" className="description semi-bold" />
            <Text text="About us" className="description-bold" />
            <Text text={job.jobDetailsFromCompany} className="description" />
          </div>
          <div className="view-job">
            <Text
              text="View Job"
              className="description-mid secondary-color"
              onClick={() => handleCompanyClick(job)}
            />
          </div>
          <div className="experience">
            <Text
              text="Minimum Experience"
              className="description semi-bold third-color"
            />
            <Text
              text={`${job?.minExp ?? "0"} years`}
              className="description-small"
            />
          </div>
          <div className="action-buttons">
            <Button
              buttonText="⚡ Easy Apply"
              size="large"
              className="apply-button"
            />
            <Button
              buttonText="Unlock referral asks"
              size="large"
              className="referral-button"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
