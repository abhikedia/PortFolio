import { Button, Textarea, TextInput } from "@mantine/core";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div id={styles.contact}>
      <div className="header">
        <DashedHeading text="LET'S CONNECT" />
        <span className="header-text">Contact Me</span>
      </div>
      <div className={styles.header}>
        Thanks for taking the time to reach out.
        <br />
        How can I help you?
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.row1}>
          <TextInput label="Name" radius="md" size="lg" />
          <TextInput label="Email" radius="md" size="lg" />
        </div>
        <Textarea radius="md" label="Message" minRows={7} size="lg" />
      </div>
      <Button radius="md" size="md" className={styles.buttonColor}>
        Send Message
      </Button>
    </div>
  );
};

export default Contact;
