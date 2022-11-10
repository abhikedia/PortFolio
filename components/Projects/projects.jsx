import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import projects from "./projectsInfo";
import Image from "next/image";
import styles from "./Projects.module.scss";

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
        <span className={styles.card}>
          <Image
            alt="Picture of the author"
            width={100}
            height={150}
            className={styles.card}
            src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          />
        </span>
      </div>
    </div>
  );
};

export default Projects;
