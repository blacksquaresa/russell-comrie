import React, { ReactNode, Component } from "react";

export class Content extends Component {
  public render(): ReactNode {
    return (
      <section>
        <h1>Content Heading</h1>
        <article>
          <p>Some text</p>
          <p>Some more text</p>
        </article>
      </section>
    );
  }
}
