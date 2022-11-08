import { IconDatabase } from "@tabler/icons";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import ServiceCard from "../../atoms/ServiceCard/serviceCard";
import styles from "./services.module.scss";

const Services = () => {
  return (
    <div id={styles.services}>
      <div className={styles.header}>
        <DashedHeading text="SERVICES" />
        <span className={styles.font}>Specialized in</span>
      </div>
      <div className={styles.cards}>
        <ServiceCard
          Icon={IconDatabase}
          heading="Backend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          subHeader="Things I enjoy designing:"
          skills="HTML, Pug, Slim, CSS, Sass, Git"
        />
        <ServiceCard
          Icon={IconDatabase}
          heading="Backend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          subHeader="Things I enjoy designing:"
          skills="HTML, Pug, Slim, CSS, Sass, Git"
        />
        <ServiceCard
          Icon={IconDatabase}
          heading="Backend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          subHeader="Things I enjoy designing:"
          skills="HTML, Pug, Slim, CSS, Sass, Git"
        />
      </div>
    </div>
  );
};

export default Services;
