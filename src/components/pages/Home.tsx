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
            <p className="home_icon">
              <img src="logo.svg" alt="Russell Comrie" />
            </p>
            <p className="hometext">
              <span className="home_line1">
                Witne&#x00DF; demonſtrations of{" "}
                <span className="homecaps">wonders</span> ancient &amp; modern,
              </span>
              <br />
              <span className="homeitalic home_line2">
                wherein ſundry objects are cauſed to appear &amp; diſappear,
              </span>
              <br />
              <span className="home_line3">
                miraculous tranſpoſitions &amp; penetrations occur,
              </span>
              <br />
              <span className="homeitalic home_line4">
                the ſubtle myſteries of gamblers are expoſed,
              </span>
              <br />
              <span className="home_line5">
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
