import React from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { RedirectButton } from "../elements/RedirectButton";
import { MarginCue } from "../elements/MarginCue";
import { Marginalia } from "../elements/Marginalia";

export function Speaking() {
  return (
    <Page>
      <section>
        <article>
          <h1>Speaking</h1>
          <h2>Enchanting Erudition</h2>
          <p>
            As a seasoned performer known for his ability to connect with
            audiences large and small, Russell is a sought-after speaker and
            MC for conferences, awards ceremonies, and other engagements.
          </p>
          <h3>Master of Ceremonies</h3>
          <p>
            It takes an expert and experienced MC to ensure that your event or
            show runs smoothly.
          </p>
          <p>
            Russell knows just how to keep your audience engaged without
            stealing focus from your stars, and also has the skills to keep
            them entertained when the unexpected strikes and you have to
            reboot the computer, recover the missing trophy, or{" "}
            <MarginCue id="speaker">revive a nervous speaker</MarginCue>.
          </p>
          <Marginalia id="speaker" align="left">
            Or find one who’s wandered off at an inopportune moment. RC
          </Marginalia>
          <p>
            Russell is available for corporate, public, and private functions.
            Get in touch to find out more.
          </p>
          <RedirectButton
            path="/contact"
            state={{
              subject: "MC Booking Query",
              context:
                "Request comes from the Book MC button on the Speaking page."
            }}
          >
            Book MC
          </RedirectButton>
          <h3>Guest Speaker</h3>
          <p>
            Russell’s unique background and interests make him a compelling
            guest speaker on a range of topics, including magic, the arts,
            academia, philosophy, psychology, and how all these fields come
            together to make life entirely more magical (his speciality).
          </p>
          <p>
            Should your event require something specific, please get in touch
            to discuss a bespoke presentation.
          </p>
          <RedirectButton
            path="/contact"
            state={{
              subject: "Speaker Booking Query",
              context:
                "Request comes from the Book Speaker button on the Speaking page."
            }}
          >
            Book Speaker
          </RedirectButton>
          <Separator />
        </article>
      </section>
    </Page>
  );
}
