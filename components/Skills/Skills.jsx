import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import Image from "next/image";
import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div id={styles.skills}>
      <div className="header">
        <DashedHeading text="Tech Involvement" />
        <span className="header-text">My Skillset</span>
      </div>
      <div className={styles.techIcons}>
        <Image
          src="/icons/react.png"
          width={120}
          height={120}
          alt="tech-icon"
        />
        <Image
          src="/icons/nextjs.png"
          width={120}
          height={80}
          alt="tech-icon"
          className={styles.padding}
        />
        <Image src="/icons/node.png" width={120} height={120} alt="tech-icon" />
        <Image src="/icons/git.png" width={120} height={120} alt="tech-icon" />
        <Image
          src="/icons/gitHub.png"
          width={120}
          height={120}
          alt="tech-icon"
        />
        <Image src="/icons/sql.png" width={120} height={120} alt="tech-icon" />
        <Image
          src="/icons/ethereum.png"
          width={120}
          height={120}
          alt="tech-icon"
        />
        <Image
          src="/icons/tezos.png"
          width={120}
          height={120}
          alt="tech-icon"
        />
      </div>
    </div>
  );
};

export default Skills;
