import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  path: string;
  state?: any;
}

export function RedirectButton(props: PropsWithChildren<Props>) {
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navigate(props.path, { state: props.state });
    event.preventDefault();
  }

  return (
    <button onClick={onClick} className="link_button">
      {props.children}
    </button>
  );
}
