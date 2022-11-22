import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import Image from "next/image";
import styles from "./Skills.module.scss";
import { useEffect, useState } from "react";

const getDimension = () => {
  if (window.innerWidth < 768) return 80;
  else if (window.innerWidth >= 768 && window.innerWidth <= 1000) return 90;
  return 120;
};

const Skills = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(getDimension());
  }, []);

  return (
    <div id="skills" className={styles.skills}>
      <div className="header">
        <DashedHeading text="Tech Involvement" />
        <span className="header-text">My Skillset</span>
      </div>
      <div className={styles.techIcons}>
        <Image
          src="/icons/react.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/nextjs.png"
          width={width < 767 ? 85 : width >= 768 && width <= 1000 ? 95 : 150}
          height={width < 767 ? 40 : width >= 768 && width <= 1000 ? 50 : 80}
          alt="tech-icon"
          className={styles.padding}
        />
        <Image
          src="/icons/node.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/git.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/gitHub.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/sql.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/ethereum.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
        <Image
          src="/icons/tezos.png"
          width={height}
          height={height}
          alt="tech-icon"
        />
      </div>
    </div>
  );
};

export default Skills;
