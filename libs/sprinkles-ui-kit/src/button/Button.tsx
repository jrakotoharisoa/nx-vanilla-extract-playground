import React from 'react';
import type { ButtonVariants } from './button.css';
import * as styles from './button.css';

const bg = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  dark: 'bg-dark',
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
> = ({ size, color = 'dark', ...props }) => (
  <button
    {...props}
    className={`${styles.button({
      color,
      size,
    })} bg-${color} disabled:bg-gray-500`}
  />
);
