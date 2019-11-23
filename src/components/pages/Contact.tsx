import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { ContactForm } from "../elements/ContactForm";
import "./Contact.css";
import { PageComponent, PageProps } from "./PageComponent";

interface Props extends PageProps {}

export class Contact extends PageComponent<Props> {
  public render(): ReactNode {
    const name = this.getLocationState("name");
    const email = this.getLocationState("email");
    const subject = this.getLocationState("subject");
    const context = this.getLocationState("context");
    const message = this.getLocationState("message");
    return (
      <Page>
        <section>
          <article>
            <h1>Contact</h1>
            <p>
              Get in touch by filling in the form below, and let’s talk about
              adding a little magic to your life.
            </p>
            <ContactForm
              redirector={this.redirector}
              name={name}
              email={email}
              subject={subject}
              context={context}
              message={message}
            />
            <p className="contact_disclaimer">
              Your personal information is confidential and will not be shared
              without your permission
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
