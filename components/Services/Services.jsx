import { IconDatabase } from "@tabler/icons";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import ServiceCard from "../../atoms/ServiceCard/ServiceCard";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <div className="header">
        <DashedHeading text="SERVICES" />
        <span className="header-text">Specialized in</span>
      </div>
      <div className={styles.cards}>
        <ServiceCard
          Icon={IconDatabase}
          heading="Frontend Development"
          description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
          subHeader="Tools I prefer:"
          skills="HTML, CSS, Sass, Git, Javascript, React, Redux, Mantine, MaterialUI, SemanticUI"
        />
        <ServiceCard
          Icon={IconDatabase}
          heading="Backend Development"
          description="I can build high performing and secure databases utilizing every bit of resource available."
          subHeader="Tools I prefer:"
          skills="Nodejs, MongoDB, MySQL, Postman, AWS"
        />
        <ServiceCard
          Icon={IconDatabase}
          heading="Blockchain Development"
          description="I keep myself updated with the latest trends and can help you build efficient blockchain applications as well."
          subHeader="Tools I prefer:"
          skills="Ethereum, Tezos, Infura, Ganache"
        />
      </div>
    </div>
  );
};

export default Services;
