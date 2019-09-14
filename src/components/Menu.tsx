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
          onToggle={this.handleClick.bind(this)}
        />
        <div className={listClass}>
          <NavLink className="menuitem" to="/">
            Russell Comrie
          </NavLink>
          <NavLink className="menuitem" to="/services">
            Services
          </NavLink>
          <NavLink className="menuitem" to="/voiceovers">
            Voice Overs
          </NavLink>
          <NavLink className="menuitem" to="/shows">
            Shows
          </NavLink>
          <NavLink className="menuitem" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="menuitem" to="/events">
            Events
          </NavLink>
          <NavLink className="menuitem" to="/contact">
            Contact
          </NavLink>
        </div>
      </nav>
    );
  }
}
