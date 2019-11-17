import React, { ReactNode, Component } from "react";
import "./ContactSubmit.css";
import { RedirectService } from "../../services/RedirectService";

interface Props {
  path: string;
  state?: any;
  redirector: RedirectService;
}

export class LinkButton extends Component<Props> {
  private onClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    this.props.redirector.goTo(this.props.path, this.props.state);
    event.preventDefault();
  }

  public render(): ReactNode {
    return (
      <button onClick={this.onClick.bind(this)} className="link_button">
        {this.props.children}
      </button>
    );
  }
}
