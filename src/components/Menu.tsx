import React, { ReactNode, Component } from "react";
import { MenuItem } from "./MenuItem";

export class Menu extends Component {
  public render(): ReactNode {
    return (
      <nav>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </nav>
    );
  }
}
