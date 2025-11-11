import React, { useState } from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { Name } from "../elements/Name";
import { BannerVideo } from "../elements/BannerVideo";

export function Shows() {
  const [layoutUpdates, setLayoutUpdates] = useState<number>(0);
  const layoutChanged = () => setLayoutUpdates(layoutUpdates + 1);
  return (
    <Page>
      <section>
        <article>
          <h1>Shows</h1>
          <BannerVideo
            src="https://www.youtube.com/embed/sOkpvi8gmmw?si=UwlKpisfO2B0xffs"
            alt="Russell Comrie Showreel Video"
            onLayoutComplete={layoutChanged}
            width={560}
            height={315}
          />
          <h2>Upcoming Public Performances</h2>
          <p>Please check back soon for news of public performances, or <a href="/contact">CONTACT</a> Russell for a private booking!</p>
          {/* 
          <Separator />
          <h2>Upcoming Workshops</h2>
          <ul>
            <li>
              <Name>Branding and MArketing for PErforming Artists</Name>, <br /> part of the Alberta Circus Arts Festival Industry Series, June 21<br/>
              <i>(See <a href="https://albertacircusarts.com/panels/">Alberta Circus Arts Festival</a> for details.)</i>
            </li>
          </ul>
          */}
        </article>
      </section>
    </Page>
  );
}
