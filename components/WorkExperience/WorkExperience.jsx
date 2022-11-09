import { IconArrowNarrowRight } from "@tabler/icons";
import { useState } from "react";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import jobDetails from "./workDetails";
import styles from "./WorkExperience.module.scss";

const getCompanyInfo = (company) => {
  return (
    <div id={styles.job}>
      <span className={styles.role}>{jobDetails.role[company]}</span>
      <span className={styles.location}>{jobDetails.location[company]}</span>
      <span className={styles.period}>{jobDetails.period[company]}</span>
      <div className={styles.tech}>
        {jobDetails.tech[company].map((tech, ind) => (
          <span key={ind} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
      <div className={styles.points}>
        {jobDetails.points[company].map((point, ind) => (
          <span key={ind} className={styles.individualPoint}>
            -- {point}
          </span>
        ))}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const [company, selectedCompany] = useState("cisco");

  return (
    <div id={styles.workExperience}>
      <div className={styles.leftPane}>
        <div className="header">
          <DashedHeading text="CAREER PATH" />
          <span className="header-text">Work Experiences</span>
        </div>
        <div className={styles.companyList}>
          <span
            className={`${styles.companyName} ${
              company === "cisco" ? styles.companySelected : undefined
            }`}
            onClick={() => selectedCompany("cisco")}
          >
            Cisco
            {company === "cisco" && <IconArrowNarrowRight />}
          </span>
          <span
            className={`${styles.companyName} ${
              company === "devfolio" ? styles.companySelected : undefined
            }`}
            onClick={() => selectedCompany("devfolio")}
          >
            Devfolio
            {company === "devfolio" && <IconArrowNarrowRight />}
          </span>
          <span
            className={`${styles.companyName} ${
              company === "iit" ? styles.companySelected : undefined
            }`}
            onClick={() => selectedCompany("iit")}
          >
            IIT Bombay
            {company === "iit" && <IconArrowNarrowRight />}
          </span>
        </div>
      </div>
      <div className={styles.displayContent}>{getCompanyInfo(company)}</div>
    </div>
  );
};

export default WorkExperience;
