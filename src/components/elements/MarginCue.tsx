import React, { ReactNode, Component, PropsWithChildren } from "react";
import "./MarginCue.css";

interface Props {
  id: string;
  cue?: string;
}

export class MarginCue extends Component<PropsWithChildren<Props>> {
  public render(): ReactNode {
    const cue = this.props.cue || "*";
    return (
      <span className="margin_cue" id={this.props.id}>
        {this.props.children}
        <span className="margin_cue_char">{cue}</span>
      </span>
    );
  }
}
