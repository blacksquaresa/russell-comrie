import React, { ReactNode, Component } from "react";
import "./ContactSubmit.css";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  canSubmit: boolean;
};

export class ContactSubmit extends Component<Props> {
  private onClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    this.props.onClick(event);
  }

  public render(): ReactNode {
    return (
      <div id="contact_button_container" className="contact_button_container">
        <button
          id="contact_button"
          name="contact_button"
          disabled={!this.props.canSubmit}
          onClick={this.onClick.bind(this)}
          className="contact_button"
        >
          Send
        </button>
      </div>
    );
  }
}
