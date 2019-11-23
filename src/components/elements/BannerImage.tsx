import React, { Component } from "react";
import "./BannerImage.css";

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  onLayoutComplete?: () => void;
};

export class BannerImage extends Component<Props> {
  private handleLoad(): void {
    if (this.props.onLayoutComplete) {
      this.props.onLayoutComplete();
    }
  }

  render() {
    const alt = this.props.alt || "";
    return (
      <div className="banner_image">
        <img
          src={this.props.src}
          alt={alt}
          onLoad={this.handleLoad.bind(this)}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }
}
