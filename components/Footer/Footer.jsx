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
      />
      <span className={styles.tagline}>
        Living, learning & leveling up one day at a time.
      </span>
      <span className={styles.icons}>
        <IconBrandLinkedin size="3rem" />
        <IconBrandGithub size="3rem" />
        <IconBrandStackoverflow size="3rem" />
        <IconBrandMedium size="3rem" />
      </span>
      <span className={styles.tagline2}>
        Made with &#x2764; by Abhishek Kedia
      </span>
    </div>
  );
};

export default Footer;
