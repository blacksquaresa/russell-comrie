import React, { ReactNode, Component, PropsWithChildren } from "react";
import "./MarginCue.css";

interface Props {}

export class Name extends Component<PropsWithChildren<Props>> {
  public render(): ReactNode {
    return <span className="named">{this.props.children}</span>;
  }
}
