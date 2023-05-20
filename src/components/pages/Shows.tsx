import React, { useState } from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { Name } from "../elements/Name";
import { BannerImage } from "../elements/BannerImage";
import { LinkButton } from "../elements/LinkButton";

export function Shows() {
  const [layoutUpdates, setLayoutUpdates] = useState<number>(0);
  const layoutChanged = () => setLayoutUpdates(layoutUpdates + 1);
  return (
    <Page>
      <section>
        <article>
          <h1>Shows</h1>
          <BannerImage
            src="/wondersbanner1.jpg"
            alt="Wonders never cease"
            onLayoutComplete={layoutChanged}
            width={1200}
            height={600}
          />
          <h2>
            <Name>Wonders never cease</Name> (Grindstone Theatre, Edmonton)
          </h2>
          <p>
            For one night only, Russell will be performing his solo show <Name>Wonders Never Cease</Name> at Edmonton’s Grindstone Theatre at 7pm on Thursday, June 29.
          </p>
          <p>
            This intimate and sophisticated show takes audiences on a journey into astonishment and beyond, as Russell presents his award-winning classic and original feats of magic and mind-reading and explores the meaning of wonder in a modern world.
          </p>
          <p>
            Russell will also be available to meet and greet after the show.
          </p>
          <p>
            Tickets are limited, so book now to avoid disappointment.
          </p>
          <LinkButton url="https://www.showpass.com/wondersnevercease-jun29/">
            Get Tickets
          </LinkButton>
          <Separator />
        </article>
      </section>
    </Page>
  );
}
