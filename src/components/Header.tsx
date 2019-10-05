import React, { ReactNode, Component } from "react";
import "./Header.css";
import { Menu } from "./Menu";

type HeaderProps = {
  onHome?: boolean;
};

export class Header extends Component<HeaderProps> {
  public render(): ReactNode {
    let headerClass = "header";
    if (this.props.onHome) {
      headerClass += " home";
    }
    let logo = this.props.onHome ? (
      <img
        src="russellcomrie.png"
        className="logo"
        alt="Russell Comrie Magician"
      />
    ) : (
      ""
    );
    return (
      <header className={headerClass}>
        {logo}
        <Menu onHome={this.props.onHome || false} />
      </header>
    );
  }
}
