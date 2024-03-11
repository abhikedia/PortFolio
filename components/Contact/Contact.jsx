import { Button, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconSend } from "@tabler/icons";
import { useState } from "react";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Send Message");

  const sendMail = () => {
    setLoading(true);

    emailjs
      .send(
        "service_1svqnfr",
        "template_q3j84bn",
        {
          from_name: email,
          message: message,
        },
        {
          publicKey: "jGcmCLwJj5SiSXUJO",
        }
      )
      .then(() => {
        setText("Sent");
        setEmail("");
        setMessage("");
        setName("");
        setLoading(false);
      })
      .catch((error) => {});
  };

  return (
    <div id="contact" className={styles.contact}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Email"
            radius="md"
            size="lg"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Textarea
          radius="md"
          label="Message"
          placeholder="Write your message here..."
          minRows={7}
          value={message}
          size="lg"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        radius="md"
        size="md"
        loading={loading}
        leftIcon={
          text === "Sent" ? <IconCheck size={16} /> : <IconSend size={16} />
        }
        onClick={sendMail}
        className={styles.buttonColor}
        disabled={!name.length || !validateEmail(email) || !message.length}
      >
        {text}
      </Button>
    </div>
  );
};

export default Contact;
