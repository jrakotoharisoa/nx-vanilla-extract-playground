import React from 'react';
import type { ButtonVariants } from './button.css';
import * as styles from './button.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants
> = ({ size, color, ...props }) => (
  <button {...props} className={styles.button({ color, size })} />
);
