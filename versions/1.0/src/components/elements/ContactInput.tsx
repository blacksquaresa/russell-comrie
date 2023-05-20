import React, { ReactNode, Component, ChangeEvent } from "react";
import "./ContactInput.css";

type validator = (val: string) => boolean;

type Props = {
  name: string;
  value?: string;
  label: string;
  error?: string;
  validation?: validator;
  multiline?: boolean;
  onChange?: (inError: boolean, val: string) => void;
};

type State = {
  inError: boolean;
  value: string;
};

export class ContactInput extends Component<Props, State> {
  readonly state: State = {
    inError: false,
    value: this.props.value || ""
  };

  private onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const content = (event.target as HTMLInputElement).value;
    let newState = {
      value: content,
      inError: this.state.inError
    };

    if (this.props.error && this.props.validation) {
      newState.inError = !this.validate(content, this.props.validation);
    }

    if (this.props.onChange) {
      this.props.onChange(newState.inError, content);
    }

    this.setState(newState);
  }

  private validate(content: string, predicate: validator): boolean {
    return predicate(content);
  }

  public render(): ReactNode {
    var id = this.props.name;
    var onChange = this.onChange.bind(this);
    var containerClass =
      "input_container" + (this.state.inError ? " input_inerror" : "");
    var error =
      this.props.error && this.props.validation ? (
        <span id={id + "_error"} className="input_error">
          {this.props.error}
        </span>
      ) : (
        ""
      );
    var field = this.props.multiline ? (
      <textarea
        name={id}
        id={id}
        className="input_field input_multi"
        onChange={onChange}
        value={this.state.value}
      />
    ) : (
      <input
        type="text"
        name={id}
        id={id}
        className="input_field input_single"
        onChange={onChange}
        value={this.state.value}
      />
    );
    return (
      <div id={id + "_container"} className={containerClass}>
        <label htmlFor={id} className="input_label">
          {this.props.label}
        </label>
        {error}
        {field}
      </div>
    );
  }
}
