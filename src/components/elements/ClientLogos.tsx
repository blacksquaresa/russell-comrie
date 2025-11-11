import React from "react";
import "./ClientLogos.css";

interface Logo {
  filename: string;
  title: string;
  alt?: string;
}

interface ClientLogosProps {
  logos: Logo[];
}

export function ClientLogos(props: ClientLogosProps) {
  return (
    <div className="client-logos">
      {props.logos.map((logo, index) => (
        <div key={index} className="logo-item">
          <div className="logo-square">
            <img
              src={`/logos/${logo.filename}`}
              alt={logo.alt || logo.title}
              title={logo.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
