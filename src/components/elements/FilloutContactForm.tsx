import React from "react";
import { FilloutStandardEmbed } from "@fillout/react";

interface Props {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  context?: string;
}

export function FilloutContactForm(props: Props) {
  return (
    <section className="contact_form">
      <FilloutStandardEmbed 
        filloutId="jMpakxnTGnus" 
        dynamicResize
        parameters={props as Record<string,string>}  />
    </section>
  );
}
