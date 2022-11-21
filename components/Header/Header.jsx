// import ColorSchemeToggle from "../ColorSchemeToggle/colorSchemeToggle";
import { Button, Drawer } from "@mantine/core";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons";
import { useState } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div id={styles.header}>
      <Image src="./responsive.gif" unoptimized={true} height={80} width={80} />
      <div className={styles.options}>
        <Link href="#services">Services</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#workExperience">Experience</Link>
        <Link href="#awards">Recognitions</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <div className={`${styles.cta}`}>
        {/* <ColorSchemeToggle /> */}
        <Button variant="default">Resume</Button>
        <IconMenu2 className={styles.menu} onClick={() => setOpened(true)} />
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="xl"
        size="sm"
        position="right"
      >
        <div className={styles.drawerOptions}>
          <Link href="#services">Services</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#workExperience">Experience</Link>
          <Link href="#awards">Recognitions</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
