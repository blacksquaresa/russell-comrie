import React, { Component } from "react";
import "./BannerImage.css";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  onLayoutComplete?: () => void;
};

export class BannerVideo extends Component<Props> {
  private handleLoad(): void {
    if (this.props.onLayoutComplete) {
      this.props.onLayoutComplete();
    }
  }

  render() {
    const alt = this.props.alt || "";
    return (
      <iframe 
        width={this.props.width} 
        height={this.props.height}
        src={this.props.src} 
        title={alt} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        onLoad={this.handleLoad.bind(this)}>
      </iframe>
    );
  }
}
