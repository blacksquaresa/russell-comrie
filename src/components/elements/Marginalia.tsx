import React, { ReactNode, Component, CSSProperties } from "react";
import "./Marginalia.css";

interface State {
  top?: number;
}

interface Props {
  id: string;
  align: "left" | "right";
  cue?: string;
}

export class Marginalia extends Component<Props, State> {
  readonly state: State = {};

  constructor(props: Props) {
    super(props);
    window.addEventListener("resize", this.checkPosition.bind(this), {
      passive: true
    });
  }

  public render(): ReactNode {
    const className = `marginalia marginalia_${this.props.align}`;
    const cue = this.props.cue || "*";
    const id = this.props.id + "_marginalia";
    const style =
      this.state.top === undefined
        ? undefined
        : ({ top: `${this.state.top}px` } as CSSProperties);
    return (
      <div className={className} id={id} style={style}>
        <span className="margin_cue_char">{cue}</span>
        {this.props.children}
      </div>
    );
  }

  public componentDidMount() {
    this.checkPosition();
  }

  private checkPosition() {
    const cue = document.getElementById(this.props.id);
    if (cue && this.state && this.state.top !== cue.offsetTop) {
      this.setState({ top: cue.offsetTop });
    }
  }
}
