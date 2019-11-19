import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { PageComponent } from "./PageComponent";
import { RedirectButton } from "../elements/RedirectButton";
import { MarginCue } from "../elements/MarginCue";
import { Marginalia } from "../elements/Marginalia";
import { Name } from "../elements/Name";
import { BannerImage } from "../elements/BannerImage";

export class Shows extends PageComponent {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <article>
            <h1>Shows</h1>
            <BannerImage
              src="/mysteriesbanner2.jpg"
              alt="Mysteries, a magic show"
              onLayoutComplete={this.layoutChanged.bind(this)}
            />
            <h2>
              <Name>Mysteries</Name> at Seabrooke's Theatre
            </h2>
            <p>
              <Name>Mysteries</Name> will change the way you see magic.
            </p>
            <p>
              A one-man show, directed by South African theatre legend Murray
              McGibbon,{" "}
              <MarginCue id="mysteries">
                <Name>Mysteries</Name>
              </MarginCue>{" "}
              explores the nature of secrets and how they shape our perception
              of magic, of art, and of ourselves.
            </p>
            <Marginalia
              id="mysteries"
              align="left"
              layoutUpdate={this.state.layoutUpdates}
            >
              from the Greek <Name>Mysteries</Name> (secret rites or doctrines
              known only to the initiated); cf. <Name>rúnar</Name> in Old Norse
              mythological poems
            </Marginalia>
            <p>
              This elegant, eloquent and enchanting show takes audiences through
              a series of beautiful and mystifying vignettes highlighting
              different aspects of the magician’s art. Throughout the show,
              Russell conjures stories that will remain with you long after the
              final bow.
            </p>
            <RedirectButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Can I book tickets to your show?",
                context:
                  "Request comes from the Get Tickets button on the Shows page."
              }}
            >
              Get Tickets
            </RedirectButton>
            <Separator />
            <h2>Bespoke Entertainment</h2>
            <p>
              Russell is available for private and corporate shows. If you’re
              looking to add a touch of wit, charm and elegance to your special
              event, we can create a bespoke show designed with your audience
              and needs in mind.
            </p>
            <h3>Corporate shows</h3>
            <p>
              Russell is expert at creating bespoke magical entertainment for
              corporate events and conferences, tailored to drive engagement
              with your brand, and to educate on the things that matter most to
              you and your business.
            </p>
            <p>
              Show your appreciation for your clients, suppliers, or employees
              by giving them an experience they will never forget - and
              conveying your corporate culture into the bargain.
            </p>
            <p>
              Get in touch to find out more about how we can help create
              something unforgettable for your next event.
            </p>
            <RedirectButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Query about booking a corporate show",
                context:
                  "Request comes from the Book a Corporate Show button on the Shows page."
              }}
            >
              Book a Show
            </RedirectButton>
            <h3>Private Functions</h3>
            <p>
              Russell’s brand of intelligent, entertaining magic is ideal for
              weddings, birthdays, engagements, and other important occasions.
            </p>
            <p>
              Add a touch of elegance to your next birthday party with a show
              full of mystery and delight.
            </p>
            <p>
              Make your wedding day even more memorable by giving your guests
              some magical entertainment while they wait for the bride and groom
              to have their photos taken.
            </p>
            <p>
              Whether you have fifteen guests or five hundred, Russell will keep
              them enthralled and entranced.
            </p>
            <RedirectButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Query about booking a private function appearance",
                context:
                  "Request comes from the Book a Private Function button on the Shows page."
              }}
            >
              Book a Function
            </RedirectButton>
          </article>
        </section>
      </Page>
    );
  }
}
