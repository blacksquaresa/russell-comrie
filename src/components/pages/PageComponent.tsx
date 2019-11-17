import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { RedirectService } from "../../services/RedirectService";

export interface PageProps extends RouteComponentProps {}
export interface PageState {}

export class PageComponent<
  Props extends PageProps = PageProps,
  State extends PageState = PageState
> extends Component<Props, State> {
  protected redirector = new RedirectService(this.props.history);
  protected getLocationState(key: string) {
    return this.props.location.state && this.props.location.state[key]
      ? this.props.location.state[key]
      : "";
  }
}
