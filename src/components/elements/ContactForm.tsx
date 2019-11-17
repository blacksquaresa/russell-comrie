import React, { ReactNode, Component } from "react";
import { ContactInput } from "./ContactInput";
import { ContactSubmit } from "./ContactSubmit";
import { IRedirectService } from "../../services/RedirectService";

interface Props {
  redirector: IRedirectService;
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

export class ContactForm extends Component<Props, State> {
  readonly state: State = {
    canSubmit: false,
    processing: false,
    name: this.props.name || "",
    email: this.props.email || "",
    subject: this.props.subject || "",
    message: this.props.message || ""
  };

  private hasAllContent(state: State): boolean {
    return !!state.name && !!state.email && !!state.subject && !!state.message;
  }

  private validateContent(content: string): boolean {
    return !!content;
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
        message: this.state.message,
        context: this.props.context
      })
    });

    if (response.ok) {
      this.props.redirector.goTo("/thankyou");
    } else {
      try {
        const data: sendmailResponse = await response.json();
        this.props.redirector.goTo("/error", { message: data.message });
      } catch (err) {
        console.log(err);
        this.props.redirector.goTo(`/error`);
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
          validation={this.validateContent.bind(this)}
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
          error="Please supply a subject"
          validation={this.validateContent.bind(this)}
          onChange={(err, val) =>
            this.onInputChange.bind(this)("subject", val, err)
          }
        />
        <ContactInput
          name="message"
          label="Message: "
          value={this.state.message}
          error="Please type a message"
          validation={this.validateContent.bind(this)}
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
