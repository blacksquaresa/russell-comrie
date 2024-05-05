import React, { ReactNode, Component } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { HamburgerButton } from "./HamburgerButton";

type MenuProps = { onHome?: boolean };
type MenuState = { visible: boolean };

export class Menu extends Component<MenuProps, MenuState> {
  readonly state: MenuState = {
    visible: false
  };

  private handleClick(): void {
    this.setState({ visible: !this.state.visible });
  }

  public render(): ReactNode {
    let listClass = "menulist";
    if (this.state.visible) {
      listClass += " visible";
    }
    let home = this.props.onHome ? (
      <span className="menutext">Home</span>
    ) : (
      <img src="monogram.svg" className="icon" alt="Russell Comrie" />
    );

    return (
      <nav>
        <NavLink className="mobileicon" to="/" end>
          <img src="monogram.svg" alt="Russell Comrie" />
        </NavLink>
        <div className={listClass}>
          <NavLink
            className="menuitem"
            to="/"
            end
            onClick={this.handleClick.bind(this)}
            id="homelink"
          >
            {home}
          </NavLink>
          <NavLink
            className="menuitem"
            to="/hirerussell"
            onClick={this.handleClick.bind(this)}
          >
            <span className="menutext">Hire Russell</span>
          </NavLink>
          <NavLink
            className="menuitem"
            to="/shows"
            onClick={this.handleClick.bind(this)}
          >
            <span className="menutext">See A Show</span>
          </NavLink>
          <NavLink
            className="menuitem"
            to="/about"
            onClick={this.handleClick.bind(this)}
          >
            <span className="menutext">About</span>
          </NavLink>
          <NavLink
            className="menuitem"
            to="/contact"
            onClick={this.handleClick.bind(this)}
          >
            <span className="menutext">Contact</span>
          </NavLink>
        </div>
        <HamburgerButton
          className="hamburger"
          onChange={this.handleClick.bind(this)}
          open={this.state.visible}
        />
      </nav>
    );
  }
}
