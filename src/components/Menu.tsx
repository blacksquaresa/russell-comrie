import React, { ReactNode, Component } from "react";
import { NavLink } from "react-router-dom";

export class Menu extends Component {
  public render(): ReactNode {
    return (
      <nav>
        <NavLink to="/">Russell Comrie</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/voiceovers">Voice Overs</NavLink>
        <NavLink to="/shows">Shows</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    );
  }
}
