import React, { Component, PropsWithChildren } from "react";
import "./Page.css";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageProps = {
  className?: string;
  onHome?: boolean;
};

export class Page extends Component<PropsWithChildren<PageProps>> {
  render() {
    let cls = "page";
    if (this.props.className) {
      cls += ` ${this.props.className}`;
    }
    return (
      <div className={cls}>
        <Header onHome={this.props.onHome} />
        <div className="centraliser">
          {this.props.children}
          <Footer onHome={this.props.onHome} />
        </div>
      </div>
    );
  }
}
