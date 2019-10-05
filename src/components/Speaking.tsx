import React, { ReactNode, Component } from "react";
import { Page } from "./Page";

export class Speaking extends Component {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Speaking</h1>
          <article>
            <p>
              Quisque ornare placerat risus. Ut molestie magna at mi. Integer
              aliquet mauris et nibh. Ut mattis ligula posuere velit. Nunc
              sagittis. Curabitur varius fringilla nisl. Duis pretium mi euismod
              erat. Maecenas id augue. Nam vulputate. Duis a quam non neque
              lobortis malesuada.
            </p>
            <p>
              Praesent euismod. Donec nulla augue, venenatis scelerisque,
              dapibus a, consequat at, leo. Pellentesque libero lectus,
              tristique ac, consectetuer sit amet, imperdiet ut, justo. Sed
              aliquam odio vitae tortor. Proin hendrerit tempus arcu. In hac
              habitasse platea dictumst. Suspendisse potenti. Vivamus vitae
              massa adipiscing est lacinia sodales. Donec metus massa, mollis
              vel, tempus placerat, vestibulum condimentum, ligula. Nunc lacus
              metus, posuere eget, lacinia eu, varius quis, libero.
            </p>
            <p>
              Aliquam nonummy adipiscing augue. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Maecenas porttitor congue massa.
              Fusce posuere, magna sed pulvinar ultricies, purus lectus
              malesuada libero, sit amet commodo magna eros quis urna. Nunc
              viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
