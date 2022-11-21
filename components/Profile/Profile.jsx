import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
} from "@tabler/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
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
    <div className={styles.profile} id="profile">
      <div className={styles.info}>
        <DashedHeading text="MY NAME IS" />
        <span className={styles.name}>
          <span className={styles.firstName}>Abhishek</span>
          <span className={styles.lastName}>Kedia.</span>
        </span>
        <span className={styles.description}>
          Creative full-stack developer with more than 2+ years of experience in
          enterprise companies and startups. Proficient in JavaScript, React and
          Nodejs.
        </span>
        <span className={styles.icons}>
          <Link href="https://www.linkedin.com/in/abhikedia/">
            <IconBrandLinkedin size="2rem" />
          </Link>
          <Link href="https://github.com/abhikedia">
            <IconBrandGithub size="2rem" />
          </Link>
          <Link href="https://stackoverflow.com/users/11052982/abhikedia">
            <IconBrandStackoverflow size="2rem" />
          </Link>
          <Link href="https://medium.com/@iamabhikedia74">
            <IconBrandMedium size="2rem" />
          </Link>
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
