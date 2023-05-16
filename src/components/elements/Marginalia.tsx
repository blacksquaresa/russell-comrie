import React, { ReactNode, Component, CSSProperties, PropsWithChildren } from "react";
import "./Marginalia.css";

interface State {
  top?: number;
}

interface Props {
  id: string;
  align: "left" | "right";
  cue?: string;
  layoutUpdate?: number;
}

export class Marginalia extends Component<PropsWithChildren<Props>, State> {
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
    const top = this.getPosition();
    const style = top ? ({ top: `${top}px` } as CSSProperties) : undefined;
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

  private checkPosition(): void {
    const top = this.getPosition();
    if (top && top !== this.state.top) {
      this.setState({ top: top });
    }
  }

  private getPosition(): number {
    const cue = document.getElementById(this.props.id);
    return cue ? cue.offsetTop : 0;
  }
}
