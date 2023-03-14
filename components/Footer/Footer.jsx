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
      <Link href="https://www.linkedin.com/in/abhikedia/">
            <IconBrandLinkedin size="2.5rem" />
          </Link>
          <Link href="https://github.com/abhikedia">
            <IconBrandGithub size="2.5rem" />
          </Link>
          <Link href="https://stackoverflow.com/users/11052982/abhikedia">
            <IconBrandStackoverflow size="2.5rem" />
          </Link>
          <Link href="https://medium.com/@iamabhikedia74">
            <IconBrandMedium size="2.5rem" />
          </Link>
      </span>
      <span className={styles.tagline2}>
        Built with &#x2764; by Abhishek Kedia
      </span>
    </div>
  );
};

export default Footer;
