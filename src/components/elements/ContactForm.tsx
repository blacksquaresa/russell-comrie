import React from "react";
import { ContactInput } from "./ContactInput";
import { ContactSubmit } from "./ContactSubmit";
import { useNavigate } from "react-router-dom";

const sendMessageFunctionUrl = ""

interface Props {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  context?: string;
}

type State = {
  canSubmit: boolean;
  processing: boolean;
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface sendmailResponse {
  status: string;
  message: string;
  error?: string;
  invalidEmail?: string;
}

function hasAllContent(state: State): boolean {
  return !!state.name && !!state.email && !!state.subject && !!state.message;
}

function validateContent(content: string): boolean {
  return !!content;
}
function validateEmail(email: string): boolean {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function ContactForm(props: Props) {
  const navigate = useNavigate();
  const [state, setState] = React.useState<State>({
    canSubmit: false,
    processing: false,
    name: props.name || "",
    email: props.email || "",
    subject: props.subject || "",
    message: props.message || ""
  });

  const onInputChange = (name: keyof State, value: string, inError: boolean): void => {
    let newState = Object.assign(state, {
      [name]: value
    }) as State;
    newState = {
      ...newState,
      canSubmit: !inError && hasAllContent(newState)
    } as Pick<State, keyof State>;
    setState(newState);
  }

  const onSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    event.preventDefault();
    if (!state.canSubmit) {
      return;
    }

    const response = await fetch("sendmail.php", {
      method: "POST",
      body: (
        `name=${encodeURIComponent(state.name)}&` +
        `email=${encodeURIComponent(state.email)}&` +
        `subject=${encodeURIComponent(state.subject)}&` +
        `message=${encodeURIComponent(state.message)}&` +
        `context=${encodeURIComponent(props.context || "")}`
      ).replace(/%20/g, "+"),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    if (response.ok) {
      navigate("/thankyou");
    } else {
      try {
        const data: sendmailResponse = await response.json();
        navigate("/error", { state: { message: data.message } });
      } catch (err) {
        console.log(err);
        navigate(`/error`);
      }
    }
  }

  return (
    <form action="sendmail.php" method="Post">
      <ContactInput
        name="name"
        label="Full Name: "
        value={state.name}
        error="Please supply your name"
        validation={validateContent}
        onChange={(err, val) =>
          onInputChange("name", val, err)
        }
      />
      <ContactInput
        name="email"
        label="Email Address: "
        value={state.email}
        error="Please supply a valid email address"
        validation={validateEmail}
        onChange={(err, val) =>
          onInputChange("email", val, err)
        }
      />
      <ContactInput
        name="subject"
        label="Subject: "
        value={state.subject}
        error="Please supply a subject"
        validation={validateContent}
        onChange={(err, val) =>
          onInputChange("subject", val, err)
        }
      />
      <ContactInput
        name="message"
        label="Message: "
        value={state.message}
        error="Please type a message"
        validation={validateContent}
        multiline={true}
        onChange={(err, val) =>
          onInputChange("message", val, err)
        }
      />
      <ContactSubmit
        onClick={onSubmit}
        canSubmit={state.canSubmit}
      ></ContactSubmit>
    </form>
  );
}
