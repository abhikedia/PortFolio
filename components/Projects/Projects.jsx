import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import projects from "./projectsInfo";
import Image from "next/image";
import styles from "./Projects.module.scss";

const projectIcons = [
  {
    src: "/logos/theRemoteDoctor.jpeg",
    alt: "The Remote Doctor",
  },
  {
    src: "/logos/lokBazaar.jpeg",
    alt: "Lok Bazaar",
  },
  {
    src: "/logos/consentManager.jpeg",
    alt: "Consent Manager",
  },
  {
    src: "/logos/verify.jpeg",
    alt: "Verify.",
  },
  {
    src: "/logos/gethHired.jpeg",
    alt: "Geth-Hired",
  },
];

const Projects = () => {
  return (
    <div id={styles.projects}>
      <div className={styles.row1}>
        <div className="header">
          <DashedHeading text="MY WORKS" />
          <span className="header-text">Featured Portfolios</span>
        </div>
      </div>
      <div className={styles.projectList}>
        {projectIcons.map((project, ind) => (
          <Image
            key={ind}
            alt={project.alt}
            width={270}
            height={230}
            className={styles.card}
            src={project.src}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
