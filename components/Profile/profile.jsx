import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
} from "@tabler/icons";
import Image from "next/image";
import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div id={styles.profile}>
      <div className={styles.info}>
        <span className={styles.header}>
          <span className={styles.dash}>-</span>
          <span className={styles.headText}>MY NAME IS</span>
        </span>
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
      <div className={styles.image}>
        <div className={styles.front}>
          <span className={styles.lines} />
          <Image
            className={styles.pic}
            quality={100}
            src="/images/me.png"
            alt="Picture of the author"
            width={100}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
