import React, { ReactNode, Component } from "react";
import { History } from "history";
import { ContactInput } from "./ContactInput";
import { ContactSubmit } from "./ContactSubmit";

type Props = {
  history: History;
};

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

export class ContactForm extends Component<Props, State> {
  readonly state: State = {
    canSubmit: false,
    processing: false,
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  private hasAllContent(state: State): boolean {
    return !!state.name && !!state.email && !!state.subject && !!state.message;
  }

  private validateName(name: string): boolean {
    return !!name;
  }
  private validateEmail(email: string): boolean {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private onInputChange(
    name: keyof State,
    value: string,
    inError: boolean
  ): void {
    let newState = Object.assign(this.state, {
      [name]: value
    }) as State;
    newState = {
      ...newState,
      canSubmit: !inError && this.hasAllContent(newState)
    } as Pick<State, keyof State>;
    this.setState(newState);
  }

  private async onSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> {
    event.preventDefault();
    if (!this.state.canSubmit) {
      return;
    }

    const response = await fetch("sendmail.php", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      })
    });

    if (response.ok) {
      this.props.history.push("/thankyou");
    } else {
      try {
        const data: sendmailResponse = await response.json();
        this.props.history.push(`/error?message=${escape(data.message)}`);
      } catch (err) {
        this.props.history.push(`/error`);
      }
    }
  }

  public render(): ReactNode {
    return (
      <form action="sendmail.php" method="Post">
        <ContactInput
          name="name"
          label="Full Name: "
          value={this.state.name}
          error="Please supply your name"
          validation={this.validateName.bind(this)}
          onChange={(err, val) =>
            this.onInputChange.bind(this)("name", val, err)
          }
        />
        <ContactInput
          name="email"
          label="Email Address: "
          value={this.state.email}
          error="Please supply a valid email address"
          validation={this.validateEmail.bind(this)}
          onChange={(err, val) =>
            this.onInputChange.bind(this)("email", val, err)
          }
        />
        <ContactInput
          name="subject"
          label="Subject: "
          value={this.state.subject}
          onChange={(err, val) =>
            this.onInputChange.bind(this)("subject", val, err)
          }
        />
        <ContactInput
          name="message"
          label="Message: "
          value={this.state.message}
          multiline={true}
          onChange={(err, val) =>
            this.onInputChange.bind(this)("message", val, err)
          }
        />
        <ContactSubmit
          onClick={this.onSubmit.bind(this)}
          canSubmit={this.state.canSubmit}
        ></ContactSubmit>
      </form>
    );
  }
}
