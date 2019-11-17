import { History } from "history";

export interface IRedirectService {
  goTo(path: string, state?: any): void;
}

export class RedirectService {
  constructor(private history: History) {}

  public goTo(path: string, state?: any): void {
    this.history.push(path, state);
  }
}
