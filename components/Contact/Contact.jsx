import { Button, Textarea, TextInput } from "@mantine/core";
import { IconCheck, IconSend } from "@tabler/icons";
import { useState } from "react";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
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

    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Host", "rapidprod-sendgrid-v1.p.rapidapi.com");
    myHeaders.append("X-RapidAPI-Key", process.env.NEXT_PUBLIC_APIKEY);
    myHeaders.append("content-type", "application/json");
    myHeaders.append("access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: process.env.NEXT_PUBLIC_EMAIL,
            },
          ],
          subject: `Portfolio reachout by ${name}`,
        },
      ],
      from: {
        email: email,
      },
      content: [
        {
          type: "text/plain",
          value: message,
        },
      ],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      requestOptions
    )
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setText("Sent");
        setLoading(false);
      });
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
