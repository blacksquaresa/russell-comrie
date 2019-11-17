import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { PageComponent, PageProps } from "./PageComponent";

export class Oops extends PageComponent<PageProps> {
  public render(): ReactNode {
    const message = this.getLocationState("message");
    const renderMessage = message ? <p className="error">{message}</p> : "";
    return (
      <Page>
        <section>
          <h1>Oops</h1>
          <article>
            <h2>Something Went Wrong</h2>
            <p>
              Our sincere apologies; magic we understand, but it seems servers
              and websites are a little more arcane! Please try the menu above
              to find what you’re looking for, or{" "}
              <a href="mailto:info@russellcomrie.com">contact us</a> directly.
            </p>
            {renderMessage}
          </article>
        </section>
      </Page>
    );
  }
}
