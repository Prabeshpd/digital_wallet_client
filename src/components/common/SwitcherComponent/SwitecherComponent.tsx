import React from 'react';
import type { PropsWithChildren } from 'react';
import { Children, isValidElement } from 'react';

interface PropType extends PropsWithChildren {
  type: any;
  children: React.ReactNode;
}

const isFunction = (data: any): data is (...args: any[]) => any => typeof data === 'function';

export function SwitcherComponent(props: PropType) {
  const { type, children } = props;

  const childElement: React.ReactNode = Children.map(children, (element) => {
    if (isValidElement(element) && isFunction(element.type) && element.type.prototype['__type'] == type) {
      return element;
    }
  });

  return <>{childElement}</>;
}
