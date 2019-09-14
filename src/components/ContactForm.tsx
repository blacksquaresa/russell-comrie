import React, { ReactNode, Component } from "react";

export class ContactForm extends Component {
  public render(): ReactNode {
    return (
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <label>
          Email: <input type="text" name="email" />
        </label>
        <label>
          Comment: <textarea name="comment" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
