import './button.css';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}>;

const Button = ( { className, children, disabled, onClick }: Props ) => (
  <button className={ [ className, disabled ? 'disabled' : '' ].join( ' ' ) } onClick={ disabled ? undefined : onClick }>
    { children }
  </button>
);


export default Button;
