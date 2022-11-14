import styles from "./DashedHeading.module.scss";

const DashedHeading = ({ text }) => {
  return (
    <div id={styles.header}>
      <span className={styles.dash}>-</span>
      <span className={styles.headText}>{text}</span>
    </div>
  );
};

export default DashedHeading;
