import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import projects from "./projectsInfo";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";

const Card = ({ icon, name, description, github }) => {
  return (
    <div className={styles.card}>
      <div className={styles.projectHeader}>
        <Image src={icon} height="30" width="30" />
        <span className={styles.projectName}>{name}</span>
      </div>
      <div className={styles.description}>{description}</div>
      <Link href={github} className={styles.link}>
        Github
      </Link>
    </div>
  );
};

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
        {projects.map((project, ind) => (
          <Card
            icon={project.icon}
            name={project.name}
            description={project.description}
            github={project.github}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
