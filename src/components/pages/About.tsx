import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { PageComponent } from "./PageComponent";

export class About extends PageComponent {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <article>
            <h1>About</h1>
            <p>
              Russell Comrie is a man of many and unusual interests. He holds
              multiple academic degrees in areas as diverse and arcane as
              medieval literature and modern physics. He has been a professional
              dance teacher, a lecturer, and a brand strategist. He is also a
              sought-after voiceover artist and has performed in theatrical
              productions in both South Africa and the UK.
            </p>
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
              He also enjoys single malt scotch, piano music, and tweed jackets.
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
