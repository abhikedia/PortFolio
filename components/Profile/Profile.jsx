import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
} from "@tabler/icons";
import Image from "next/image";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import styles from "./Profile.module.scss";

const Profile = () => {
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
        width={650}
        height={450}
      />
    </div>
  );
};

export default Profile;
