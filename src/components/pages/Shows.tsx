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
          <h2>Upcoming Performances</h2>
          <ul>
            <li>
              <Name>Magic Mania</Name> at the Grindstone Theatre, June 13<br/>
              <i>(See <a href="https://www.grindstonetheatre.ca/calendar">Grindstone Theatre</a> for tickets.)</i>
            </li>
            <li>
              <Name>5@Cirque</Name> at La Cit&eacute; Francophone, June 20<br />
              <i>(See <a href="https://albertacircusarts.com/free/">Alberta Circus Arts Festival</a> for details.)</i>
            </li>
            <li>
              <Name>Audreys 50 Favourites</Name> at the Yardbird Suite, July 5<br />
              <i>(See <a href="https://www.audreys.ca/events/2894620250703">Audreys Books</a> for details.)</i>
            </li>
            <li>
              <Name>Magical Mysteries</Name> at the Edmonton Fringe Festival, August 14 to 24<br />
              <i>(See <a href="https://www.fringetheatre.ca/festival/">Edmonton Fringe Festival</a> for details.)</i>
            </li>
          </ul>
          <Separator />
          <h2>Upcoming Workshops</h2>
          <ul>
            <li>
              <Name>Branding and MArketing for PErforming Artists</Name>, <br /> part of the Alberta Circus Arts Festival Industry Series, June 21<br/>
              <i>(See <a href="https://albertacircusarts.com/panels/">Alberta Circus Arts Festival</a> for details.)</i>
            </li>
          </ul>
        </article>
      </section>
    </Page>
  );
}
