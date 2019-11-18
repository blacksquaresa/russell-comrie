import React, { ReactNode, Component } from "react";
import "./Footer.css";

type FooterProps = {
  onHome?: boolean;
};

export class Footer extends Component<FooterProps> {
  public render(): ReactNode {
    return (
      <footer className="footer">
        <span className="footername">&copy; Russell Comrie 2019</span>
        <span className="footerdivider"></span>
        <a
          className="footerinstagram"
          href="https://www.instagram.com/russell.comrie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <span className="footerdivider"></span>
        <a
          className="footertwitter"
          href="https://www.twitter.com/russellcomrie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </footer>
    );
  }
}
