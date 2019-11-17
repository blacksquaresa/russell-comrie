import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { PageComponent } from "./PageComponent";

export class FourOhFour extends PageComponent {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>404</h1>
          <article>
            <h2>Page Not Found</h2>
            <p>
              Our sincere apologies; magic we understand, but it seems servers
              and websites are a little more arcane! Please try the menu above
              to find what you’re looking for, or{" "}
              <a href="mailto:info@russellcomrie.com">contact us</a> directly.
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
