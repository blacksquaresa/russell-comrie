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
          <h2>Man &amp; Magician</h2>
          <p>
            Russell Comrie is a man of many and unusual interests. He holds
            multiple academic degrees in areas as diverse and arcane as{" "}
            <MarginCue id="literature">medieval literature</MarginCue> and
            modern physics. He has been a professional dance teacher, a
            lecturer, and a brand strategist. He is also a sought-after
            voiceover artist and has performed in theatrical productions in
            both South Africa and the UK.
          </p>
          <Marginalia id="literature" align="left">
            My special interest was the poetic construction of mythology and
            prophecy in Old Norse literature. RC
          </Marginalia>
          <p>
            Throughout his magic career he has been drawn to and inspired by
            the work of the world’s greatest magicians: Lavand, Vernon,
            Tamariz, Williamson, and others. He has dedicated himself to
            perfecting the artistic side of magic, creating experiences that
            resonate long after the show is over.
          </p>
          <p>
            His goal is to draw people into the strange and marvellous world
            he prefers to inhabit: a world in which magic and reality blur and
            beauty is revealed behind the mundane.
          </p>
          <p>
            He also enjoys single malt scotch,{" "}
            <MarginCue id="piano">piano music</MarginCue>, and tweed jackets.
          </p>
          <Marginalia id="piano" align="right">
            Especially Murray Perahia’s interpretations of Chopin and
            Beethoven. RC
          </Marginalia>
          <h2>Magic By Design</h2>
          <p>
            The design of this website – and Russell’s brand in general –
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
            Russell’s <MarginCue id="logo">logo and monogram</MarginCue>{" "}
            incorporate an infinity symbol, representing the limitless
            potential of human thought. Its use was inspired by the Magician
            card in the Rider-Waite tarot deck, where it hovers symbolically
            over the magician’s head.
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
