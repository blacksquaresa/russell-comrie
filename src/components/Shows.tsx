import React, { ReactNode, Component } from "react";
import { Page } from "./Page";

export class Shows extends Component {
  public render(): ReactNode {
    return (
      <Page>
        <section>
          <h1>Shows</h1>
          <article>
            <p>
              Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
              Suspendisse dui purus, scelerisque at, vulputate vitae, pretium
              mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut
              nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem
              pellentesque magna. Integer nulla. Donec blandit feugiat ligula.
            </p>
            <p>
              Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium
              metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus
              consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at
              lorem in nunc porta tristique. Proin nec augue. Quisque aliquam
              tempor magna. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Nunc ac magna.
              Maecenas odio dolor, vulputate vel, auctor ac, accumsan id, felis.
            </p>
            <p>
              Pellentesque cursus sagittis felis. Pellentesque porttitor, velit
              lacinia egestas auctor, diam eros tempus arcu, nec vulputate augue
              magna vel risus. Cras non magna vel ante adipiscing rhoncus.
              Vivamus a mi. Morbi neque. Aliquam erat volutpat. Integer ultrices
              lobortis eros. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Proin semper, ante
              vitae sollicitudin posuere, metus quam iaculis nibh, vitae
              scelerisque nunc massa eget pede. Sed velit urna, interdum vel,
              ultricies vel, faucibus at, quam.
            </p>
            <p>
              Donec elit est, consectetuer eget, consequat quis, tempus quis,
              wisi. In in nunc. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos hymenaeos. Donec ullamcorper
              fringilla eros. Fusce in sapien eu purus dapibus commodo. Cum
              sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Cras faucibus condimentum odio. Sed ac ligula.
              Aliquam at eros. Etiam at ligula et tellus ullamcorper ultrices.
            </p>
          </article>
        </section>
      </Page>
    );
  }
}
