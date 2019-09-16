import React, { ReactNode, Component } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { HamburgerButton } from "./HamburgerButton";

type MenuState = { visible: boolean };

export class Menu extends Component<{}, MenuState> {
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

    return (
      <nav>
        <HamburgerButton
          className="hamburger"
          onChange={this.handleClick.bind(this)}
          open={this.state.visible}
        />
        <div className={listClass}>
          <NavLink
            className="menuitem"
            to="/"
            onClick={this.handleClick.bind(this)}
          >
            Russell Comrie
          </NavLink>
          <NavLink
            className="menuitem"
            to="/services"
            onClick={this.handleClick.bind(this)}
          >
            Services
          </NavLink>
          <NavLink
            className="menuitem"
            to="/voiceovers"
            onClick={this.handleClick.bind(this)}
          >
            Voice Overs
          </NavLink>
          <NavLink
            className="menuitem"
            to="/shows"
            onClick={this.handleClick.bind(this)}
          >
            Shows
          </NavLink>
          <NavLink
            className="menuitem"
            to="/gallery"
            onClick={this.handleClick.bind(this)}
          >
            Gallery
          </NavLink>
          <NavLink
            className="menuitem"
            to="/events"
            onClick={this.handleClick.bind(this)}
          >
            Events
          </NavLink>
          <NavLink
            className="menuitem"
            to="/contact"
            onClick={this.handleClick.bind(this)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }
}
