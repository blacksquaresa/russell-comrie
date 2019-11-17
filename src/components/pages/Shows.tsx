import React, { ReactNode } from "react";
import { Page } from "../layout/Page";
import { Separator } from "../elements/Separator";
import { PageComponent } from "./PageComponent";
import { LinkButton } from "../elements/LinkButton";

export class Shows extends PageComponent {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Shows</h1>
          <article>
            <h2>
              <em>Mysteries</em> at the Seabrooke's Theatre
            </h2>
            <p>Mysteries will change the way you see magic.</p>
            <p>
              A one-man show, directed by South African theatre legend Murray
              McGibbon, Mysteries explores the nature of secrets and how they
              shape our perception of magic, of art, and of ourselves.
            </p>
            <p>
              This elegant, eloquent and enchanting show takes audiences through
              a series of beautiful and mystifying vignettes highlighting
              different aspects of the magician’s art. Throughout the show,
              Russell conjures stories that will remain with you long after the
              final bow.
            </p>
            <LinkButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Can I book tickets to your show?",
                context:
                  "Request comes from the Get Tickets button on the Shows page."
              }}
            >
              Get Tickets
            </LinkButton>
            <Separator />
            <h2>Bespoke Entertainment</h2>
            <p>
              Russell is available for private and corporate shows. If you’re
              looking to add a touch of wit, charm and elegance to your special
              event, we can create a bespoke show designed with your audience
              and needs in mind.
            </p>
            <Separator />
            <h2>Corporate shows</h2>
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
            <LinkButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Query about booking a corporate show",
                context:
                  "Request comes from the Book a Corporate Show button on the Shows page."
              }}
            >
              Book a Show
            </LinkButton>
            <Separator />
            <h2>Private Functions</h2>
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
            <LinkButton
              redirector={this.redirector}
              path="/contact"
              state={{
                subject: "Query about booking a private function appearance",
                context:
                  "Request comes from the Book a Private Function button on the Shows page."
              }}
            >
              Book a Function
            </LinkButton>
          </article>
        </section>
      </Page>
    );
  }
}
