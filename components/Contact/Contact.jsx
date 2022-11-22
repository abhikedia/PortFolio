import { Button, Textarea, TextInput } from "@mantine/core";
import { IconSend } from "@tabler/icons";
import { useState } from "react";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = () => {
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_APIKEY,
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      data: `{"personalizations":[{"to":[{"email":${email}}],"subject":"Portfolio reachout}],"from":{"email":${email}},"content":[{"type":"text/plain","value":${message}}]}`,
    };

    fetch("https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send", options)
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

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
          <TextInput
            label="Name"
            radius="md"
            size="lg"
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Email"
            radius="md"
            size="lg"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Textarea
          radius="md"
          label="Message"
          minRows={7}
          size="lg"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        radius="md"
        size="md"
        loading={loading}
        leftIcon={<IconSend size={16} />}
        onClick={sendMail}
        className={styles.buttonColor}
        disabled={!name.length || !email.length || !message.length}
      >
        Send Message
      </Button>
    </div>
  );
};

export default Contact;
