import ColorSchemeToggle from "../ColorSchemeToggle/colorSchemeToggle";
import { Button } from "@mantine/core";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div id={styles.header}>
      <Image src="./responsive.gif" unoptimized={true} height={80} width={80} />
      <div className={styles.options}>
        <span>Services</span>
        <span>Portfolio</span>
        <span>Experience</span>
        <span>Blog</span>
      </div>
      <div className={`${styles.cta} ${styles.options}`}>
        {/* <ColorSchemeToggle /> */}
        <Button variant="default">Resume</Button>
      </div>
    </div>
  );
};

export default Header;
