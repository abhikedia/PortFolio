// import ColorSchemeToggle from "../ColorSchemeToggle/colorSchemeToggle";
import { Button, Drawer } from "@mantine/core";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons";
import { useState } from "react";

const elements = [
  "Profile",
  "Services",
  "Portfolio",
  "Experience",
  "Recognitions",
  "Skills",
  "Contact",
];

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div id={styles.header}>
      <Image
        src="./responsive.gif"
        unoptimized={true}
        height={80}
        width={80}
        alt="animated-gif"
      />
      <div className={styles.options}>
        {elements.map((el) => (
          <Link href={`#${el.toLowerCase()}`} scroll={false} key={el}>
            {el}
          </Link>
        ))}
      </div>
      <div className={`${styles.cta}`}>
        {/* <ColorSchemeToggle /> */}
        <Button
          variant="default"
          onClick={() => window.open("/Resume_Abhishek_Kedia.pdf", "_blank")}
        >
          Resume
        </Button>
        <IconMenu2 className={styles.menu} onClick={() => setOpened(true)} />
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="sm"
        position="right"
      >
        <div className={styles.drawerOptions}>
          {elements.map((el) => (
            <Link href={`#${el.toLowerCase()}`} scroll={false} key={el}>
              {el}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
