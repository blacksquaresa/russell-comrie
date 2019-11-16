import React, { ReactNode, Component } from "react";
import { History } from "history";
import { Page } from "../Page";
import { ContactForm } from "./ContactForm";

type Props = {
  history: History;
};

export class Contact extends Component<Props> {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Contact Russell</h1>
          <article>
            <p>
              Fill in the form below to get in touch with Russell, and add a
              little magic to your dull, workaday life.
            </p>
            <ContactForm history={this.props.history} />
          </article>
        </section>
      </Page>
    );
  }
}
