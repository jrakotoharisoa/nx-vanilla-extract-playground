import React from 'react';
import { button, ButtonVariants } from './button.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
> = ({ size, color, ...props }) => (
  <button
    {...props}
    className={`${props.className || ''} ${button({ color, size })}`}
  />
);
