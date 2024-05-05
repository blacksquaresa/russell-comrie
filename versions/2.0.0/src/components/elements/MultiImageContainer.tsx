import React, { PropsWithChildren, createContext, useContext } from "react";
import "./MultiImageContainer.css";

interface ContainerProps {
}

interface ChildProps {
  portion?: number;
  src: string;
  alt: string;
  width?: number
}

const portionContext = createContext([ 1, 0 ]);

export function MultiImageContainer(props: PropsWithChildren<ContainerProps>) {
  if(!props.children || !Array.isArray(props.children)) {
    return null;
  }

  let portions = props.children.reduce((acc: number, child: JSX.Element, index: number) => {
    if (child.props.portion) {
      acc += parseInt(child.props.portion);
    } else {
      acc++;
    }
    return acc;
  }, []);

  return (
    <portionContext.Provider value={ [ portions, props.children.length ] }>
    <div className="multi-image-container">
      {props.children}
    </div>
    </portionContext.Provider>
  );
}

export function MultiImage(props: ChildProps) {
  const [ portions, images ] = useContext(portionContext);
  let portion = props.portion || 1;
  let spacers = (images - 1) * 5;;
  return (
    <img className="multi-image" src={props.src} alt={props.alt} style={ {width: `calc((100% - ${spacers}px) / ${portions} * ${portion})`}} />
  );
}
