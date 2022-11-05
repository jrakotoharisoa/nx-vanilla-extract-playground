import React from 'react';
import { buttonClass } from './styles.css';

export const Button: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => (
  <button
    {...props}
    className={`${props.className || ''} ${buttonClass}`}
  />
);

