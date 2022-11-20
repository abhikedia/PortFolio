import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
} from "@tabler/icons";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import styles from "./Profile.module.scss";

const getWidth = () => {
  if (window.innerWidth <= 1000 && window.innerWidth >= 768) return 350;
  return 500;
};

const getHeight = () => {
  if (window.innerWidth <= 1000 && window.innerWidth >= 768) return 280;
  return 400;
};

const Profile = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(getHeight());
    setWidth(getWidth());
  }, []);

  return (
    <div id={styles.profile}>
      <div className={styles.info}>
        <DashedHeading text="MY NAME IS" />
        <span className={styles.name}>
          <span className={styles.firstName}>Abhishek</span>
          <span className={styles.lastName}>Kedia.</span>
        </span>
        <span className={styles.description}>
          Creative front-end developer with more than +5 years of experience in
          enterprise companies and startups. Proficient in JavaScript, Angular,
          and React. Passionate about UI/UX
        </span>
        <span className={styles.icons}>
          <IconBrandLinkedin size="2rem" />
          <IconBrandGithub size="2rem" />
          <IconBrandStackoverflow size="2rem" />
          <IconBrandMedium size="2rem" />
        </span>
      </div>
      <Image
        className={styles.pic}
        quality={100}
        src="/images/me2.png"
        alt="Picture of the author"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Profile;
