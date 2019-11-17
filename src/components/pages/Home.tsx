import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import "./Home.css";
import { PageComponent } from "./PageComponent";

export class Home extends PageComponent {
  public render(): ReactNode {
    return (
      <Page onHome={true} className="home">
        <section>
          <article>
            <p className="hometext">
              <span>
                Witneſs demonſtrations of{" "}
                <span className="homecaps">wonders</span> ancient &amp; modern,
              </span>
              <br />
              <span className="homeitalic">
                wherein ſundry objects are cauſed to appear &amp; diſappear,
              </span>
              <br />
              <span>miraculous tranſpoſitions &amp; penetrations occur,</span>
              <br />
              <span className="homeitalic">
                the ſubtle myſteries of gamblers are expoſed,
              </span>
              <br />
              <span>
                &amp; thoughts are <span className="homecaps">magically</span>{" "}
                divined.
              </span>
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
