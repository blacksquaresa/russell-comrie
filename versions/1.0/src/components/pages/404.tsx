import React from "react";
import { Page } from "../layout/Page";

export function FourOhFour() {
  return (
    <Page>
      <section>
        <article>
          <h1>404</h1>
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
