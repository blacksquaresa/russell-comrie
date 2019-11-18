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
            <h1>Contact Russell</h1>
            <p>
              Fill in the form below to get in touch with Russell, and add a
              little magic to your dull, workaday life.
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
