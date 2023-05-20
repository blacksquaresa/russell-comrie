import React from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { RedirectButton } from "../elements/RedirectButton";
import { MarginCue } from "../elements/MarginCue";
import { Marginalia } from "../elements/Marginalia";

export function HireRussell() {
  return (
    <Page>
      <section>
        <article>
          <h1>HireRussell</h1>
          <h2>Bespoke Entertainment</h2>
          <p>
            Add a touch of magic to your special event and make it unforgettable!
          </p>
          <h3>Corporate Entertainment</h3>
          <p>
            The holy grail for any corporate event is to be memorable, fun, and engaging.
          </p>
          <p>
            Russell's magic does exactly that, from mingling magic that breaks the ice and gets people talking, to his participation-packed show full of magic and mind-reading, to an exclusive VIP offering for those guests you really want to{" "}
            <MarginCue id="impress">impress</MarginCue>.
          </p>
          <Marginalia id="impress" align="left">
            If you need something unique, let's talk. RC
          </Marginalia>
          <p>
            Whether you're rewarding employees or engaging clients and investors, Russell's magic will have them talking about your event for years to come.
          </p>
          <RedirectButton
            path="/contact"
            state={{
              subject: "Corporate Entertainment Booking Query",
              context: "Request comes from the Book Now button for Corporate Entertainment on the Hire Russell page."
            }}
          >
            Book Now
          </RedirectButton>
          <Separator />
          <h3>Wedding Magic</h3>
          <p>
            Make your wedding as memorable for your guests as it is for you!
          </p>
          <p>
            Russell's wedding magic is the secret ingredient that will set your special day apart. 
            His mingling magic will bring your guests together and break the ice, keeping them entertained while the wedding couple is otherwise engaged. 
            His bespoke wedding show is the perfect accompaniment to speeches and adds that special touch to your <MarginCue id="reception">reception</MarginCue>.
          </p>
          <Marginalia id="reception" align="right">
            Especially for those who don’t want to trip the light fantastic on the dance floor! RC
          </Marginalia>
          <p>Whether it's an intimate wedding or an all-out extravaganza, Russell will help you to make it magical!</p>
          <RedirectButton
            path="/contact"
            state={{
              subject: "Wedding Magic Booking Query",
              context: "Request comes from the Book Now button for Wedding Magic on the Hire Russell page."
            }}
          >
            Book Now
          </RedirectButton>
          <Separator />
          <h3>Private Functions</h3>
          <p>
            Russell's unique brand of charming, entertaining magic will bring mystery and delight to your birthday, engagement party, anniversary, or any other important occasion.
          </p>
          <p>
            Whether you have <MarginCue id="fifteenguests">fifteen guests</MarginCue> or five hundred, Russell will keep them - and you - enthralled and entertained.
          </p>
          <Marginalia id="fifteenguests" align="left">
            There is nothing quite like seeing magic up close. RC
          </Marginalia>
          <RedirectButton
            path="/contact"
            state={{
              subject: "Private Functions Booking Query",
              context: "Request comes from the Book Now button for Private Functions on the Hire Russell page."
            }}
          >
            Book Now
          </RedirectButton>
          <Separator />
          <h3>Compère / Mc</h3>
          <p>
            Russell is a compère without <MarginCue id="compare">compare</MarginCue>, keeping your audience engaged and entertaining them when the unexpected strikes!
          </p>
          <Marginalia id="compare" align="right">
            I do not apologise for this pun! RC
          </Marginalia>
          <p>
            Professional, charming, and experienced, Russell will warm up your audience, frame your speakers and entertainers (without stealing focus from your stars), and help you deliver on your objectives.
          </p>
          <RedirectButton
            path="/contact"
            state={{
              subject: "Compère / Mc Booking Query",
              context: "Request comes from the Book Now button for Compère / MC on the Hire Russell page."
            }}
          >
            Book Now
          </RedirectButton>
          <Separator />
        </article>
      </section>
    </Page>
  );
}
