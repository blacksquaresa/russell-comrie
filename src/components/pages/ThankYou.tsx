import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { PageComponent } from "./PageComponent";

export class ThankYou extends PageComponent {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Thank You</h1>
          <article>
            <p>
              Thank you for getting in touch. We’ll get back to you as soon as
              possible.
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
