import React, { Component } from "react";
import "./Page.css";
import { Header } from "./Header";

type PageProps = {
  className?: string;
  open?: boolean;
  onHome?: boolean;
};

export class Page extends Component<PageProps> {
  render() {
    return (
      <div className="Page">
        <Header onHome={this.props.onHome} />
        <div className="centraliser">{this.props.children}</div>
      </div>
    );
  }
}
