import React, { ReactNode, Component, PropsWithChildren } from "react";

interface Props {
  url: string;
}

export class LinkButton extends Component<PropsWithChildren<Props>> {
  private onClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    window.location.href = this.props.url;
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
