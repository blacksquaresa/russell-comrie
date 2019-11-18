import React, { ReactNode, Component } from "react";
import "./Header.css";
import { Menu } from "./Menu";

type HeaderProps = {
  onHome?: boolean;
};

export class Header extends Component<HeaderProps> {
  public render(): ReactNode {
    let logo = this.props.onHome ? (
      <img src="logo.svg" className="logo" alt="Russell Comrie Magician" />
    ) : (
      ""
    );
    return (
      <header className="header">
        {logo}
        <Menu onHome={this.props.onHome || false} />
      </header>
    );
  }
}
