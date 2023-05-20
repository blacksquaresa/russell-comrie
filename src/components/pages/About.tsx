import React from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { MarginCue } from "../elements/MarginCue";
import { Marginalia } from "../elements/Marginalia";

export function About() {  
  return (
    <Page>
      <section>
        <article>
          <h1>About</h1>
          <h2>About Russell</h2>
          <p>
            Born and raised in KwaZulu-Natal, South Africa, Russell Comrie is an award-winning magician now based in Edmonton, Canada.
          </p>
          <p>
            He is also a man of many and unusual interests. He holds multiple academic degrees in areas as diverse and arcane as medieval 
            literature and modern physics and is currently completing an additional degree in Arts & Cultural Management. He has been a 
            professional dance teacher and a university lecturer, and is currently a brand and marketing strategist. He is also a member 
            of both the Edmonton Magic Club and the South African Magical Society.
          </p>
          <p>
            When not performing magic (or thinking about magic), you can find him browsing local bookshops, walking in the river valley, 
            or relaxing with a single malt in one hand while the other swoops and dances in time with the {" "}
            <MarginCue id="music">music in his head</MarginCue>.
          </p>
          <Marginalia id="music" align="left">
            Usually classical, if you're wondering. RC
          </Marginalia>
          <Separator />
          <h2>About His Work</h2>
          <p>
            Throughout his magic career, Russell has been inspired by the work of great magicians, poets, philosophers, and artists. He 
            has dedicated himself to creating intelligent and artistic magic that resonates long after the show is over.
          </p>
          <p>
            Every show, every trick, offers a glimpse into a different world: a world in which art leads and {" "}
            <MarginCue id="follows">reality follows</MarginCue>, in which impossible things happen, and in which the audience and the 
            magician come together to share something unique.
          </p>
          <Marginalia id="follows" align="right">
            With thanks to Oscar Wilde. RC
          </Marginalia>
          <Separator />
          <h2>Magic By Design</h2>
          <p>
            The design of this website - and Russell's brand in general -
            reflects his love of aesthetics reaching back to the medieval
            past.
          </p>
          <p>
            The site uses Crimson Text, an old-style serif typeface based on
            the elegant typefaces of Parisian Claude Garamont (c. 1510-1561).
            The simple colour palette is a nod to medieval manuscripts and
            early printed books; the red is the closest modern match to the
            ink used for rubrication. The layout of the text follows the
            typographic principles established by book designer Jan Tschichold
            in the mid 1940s.
          </p>
          <p>
            Russell's <MarginCue id="logo">logo and monogram</MarginCue>{" "}
            incorporate an infinity symbol, representing the limitless
            potential of human thought. Its use was inspired by the Magician
            card in the Rider-Waite tarot deck, where it hovers symbolically
            over the magician's head.
          </p>
          <Marginalia id="logo" align="left">
            Designed by the marvellous Mark Stead at{" "}
            <a
              href="http://www.derrickcapetown.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Derrick Cape Town
            </a>
            . RC
          </Marginalia>
          <Separator />
        </article>
      </section>
    </Page>
  );
}
