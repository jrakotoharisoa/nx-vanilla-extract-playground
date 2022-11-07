import React from 'react';
import { button, ButtonVariants } from './styles.css';

export const Button: React.FC<
  React.HTMLAttributes<HTMLButtonElement> & ButtonVariants
> = ({ size, color, ...props }) => (
  <button
    {...props}
    className={`${props.className || ''} ${button({ color, size })}`}
  />
);
