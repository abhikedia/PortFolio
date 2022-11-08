import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ Icon, heading, description, skills, subHeader }) => {
  return (
    <div id={styles.serviceCard}>
      <Icon />
      <span className={styles.header}>{heading}</span>
      <span>{description}</span>
      <span className={styles.subHeader}>{subHeader}</span>
      <span>{skills}</span>
    </div>
  );
};

export default ServiceCard;
