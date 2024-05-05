import React from "react";
import { Page } from "../layout/Page";
import { useLocation } from "react-router-dom";

export function Oops() {
  const location = useLocation();
  const state = location.state;
  const renderMessage = state?.message ? <p className="error">{state?.message}</p> : "";
  return (
    <Page>
      <section>
        <article>
          <h1>Oops</h1>
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
