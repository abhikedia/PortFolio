import Image from "next/image";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandStackoverflow,
  IconBrandMedium,
} from "@tabler/icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <Image
        src="./responsive.gif"
        unoptimized={true}
        height={150}
        width={150}
        alt="animated-gif"
      />
      <span className={styles.tagline}>
        Living, learning & leveling up one day at a time.
      </span>
      <span className={styles.icons}>
        <IconBrandLinkedin size="2.5rem" />
        <IconBrandGithub size="2.5rem" />
        <IconBrandStackoverflow size="2.5rem" />
        <IconBrandMedium size="2.5rem" />
      </span>
      <span className={styles.tagline2}>
        Built with &#x2764; by Abhishek Kedia
      </span>
    </div>
  );
};

export default Footer;
