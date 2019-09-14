import React, { ReactNode, Component } from "react";
import { ContactForm } from "./ContactForm";

export class Contact extends Component {
  public render(): ReactNode {
    return (
      <section>
        <h1>Contact Russell</h1>
        <article>
          <p>
            Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet
            nonummy augue. Suspendisse dui purus, scelerisque at, vulputate
            vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis
            eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse
            dapibus lorem pellentesque magna. Integer nulla.
          </p>
          <ContactForm />
        </article>
      </section>
    );
  }
}
