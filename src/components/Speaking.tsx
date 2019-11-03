import React, { ReactNode, Component } from "react";
import { Page } from "./Page";
import { Separator } from "./Separator";

export class Speaking extends Component {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Speaking</h1>
          <article>
            <h2>Enchanting Erudition</h2>
            <p>
              As a seasoned performer known for his ability to connect with
              audiences large and small, Russell is a sought-after speaker and
              MC for conferences, awards ceremonies, and other engagements.
            </p>
            <Separator />
            <h2>Master of Ceremonies</h2>
            <p>
              It takes an expert and experienced MC to ensure that your event or
              show runs smoothly.
            </p>
            <p>
              Russell knows just how to keep your audience engaged without
              stealing focus from your stars, and also has the skills to keep
              them entertained when the unexpected strikes and you have to
              reboot the computer, recover the missing trophy, or revive a
              nervous speaker.
            </p>
            <p>
              Russell is available for corporate, public, and private functions.
              Get in touch to find out more.
            </p>
            <button>Book MC</button>
            <Separator />
            <h2>Guest Speaker</h2>
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
            <button>Book Speaker</button>
          </article>
        </section>
      </Page>
    );
  }
}
