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
            src="/RC_audreysshow_banner1.jpg"
            alt="A Book of 52 Pages"
            onLayoutComplete={layoutChanged}
            width={1200}
            height={600}
          />
          <h2>
            <Name>A Book of 52 Pages</Name>
            <br />
            (Audreys Books, Edmonton)
          </h2>
          <p>
            For one night only, Russell will be performing his solo show <Name>A Book of 52 Pages</Name> at Edmonton's famous Audreys Books at 7pm on Wednesday, May 15.
          </p>
          <p>
            In this intimate and sophisticated show, Russell presents his award-winning classic and original feats of magic and mind-reading and explores the wonder of words and the stories we tell ourselves and each other.
          </p>
          <p>
            Tickets are limited, so book now to avoid disappointment.
          </p>
          <LinkButton url="https://52pages.eventbrite.ca/">
            Get Tickets
          </LinkButton>
          <Separator />
        </article>
      </section>
    </Page>
  );
}
