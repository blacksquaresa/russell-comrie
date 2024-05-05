import React from "react";
import { Page } from "../layout/Page";
import { ContactForm } from "../elements/ContactForm";
import "./Contact.css";
import { useLocation } from "react-router-dom";

export function Contact() {
  const location = useLocation();
  const state = location.state;
  const name = state?.name || "";
  const email = state?.email || "";
  const subject = state?.subject || "";
  const context = state?.context || "";
  const message = state?.message || "";
  return (
    <Page>
      <section>
        <article>
          <h1>Contact</h1>
          <p>
            Get in touch by filling in the form below, and let’s talk about
            adding a little magic to your life.
          </p>
          <ContactForm
            name={name}
            email={email}
            subject={subject}
            context={context}
            message={message}
          />
          <p className="contact_disclaimer">
            Your personal information is confidential and will not be shared
            without your permission
          </p>
        </article>
      </section>
    </Page>
  );
}
