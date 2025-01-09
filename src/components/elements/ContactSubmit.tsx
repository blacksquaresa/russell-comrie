import React from "react";
import "./ContactSubmit.css";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  canSubmit: boolean;
  processing: boolean;
};

export function ContactSubmit(props: Props) {
  console.log('Preparing button with props: ', props);
  const onClick = function (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    props.onClick(event);
  }

  const renderText = function (): string {
    if (!props.canSubmit) {
      return "Please fill in all fields";
    }

    if (props.processing) {
      return "Sending...";
    }

    return 'Send';
  }

  return (
    <div id="contact_button_container" className="contact_button_container">
      <button
        id="contact_button"
        name="contact_button"
        disabled={!props.canSubmit || props.processing}
        onClick={onClick}
        className="contact_button"
      >
        {renderText()}
      </button>
    </div>
  );
}
