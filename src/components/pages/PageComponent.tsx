import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { RedirectService } from "../../services/RedirectService";

export interface PageProps extends RouteComponentProps {}
export interface PageState {
  layoutUpdates: number;
}

export class PageComponent<
  Props extends PageProps = PageProps
> extends Component<Props, PageState> {
  public readonly state: PageState = {
    layoutUpdates: 0
  };

  protected redirector = new RedirectService(this.props.history);

  protected getLocationState(key: string) {
    return this.props.location.state && this.props.location.state[key]
      ? this.props.location.state[key]
      : "";
  }

  protected layoutChanged(): void {
    this.setState({ layoutUpdates: this.state.layoutUpdates + 1 });
  }
}
