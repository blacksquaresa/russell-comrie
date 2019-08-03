import React, { ReactNode, Component } from "react";

export class Home extends Component {
  public render(): ReactNode {
    return (
      <section>
        <h1>Russell Comrie</h1>
        <article>
          <p>Some text</p>
          <p>Some more text</p>
        </article>
      </section>
    );
  }
}
