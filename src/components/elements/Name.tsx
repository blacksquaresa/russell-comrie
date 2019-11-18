import React, { ReactNode, Component } from "react";
import "./MarginCue.css";

interface Props {}

export class Name extends Component<Props> {
  public render(): ReactNode {
    return <span className="named">{this.props.children}</span>;
  }
}
