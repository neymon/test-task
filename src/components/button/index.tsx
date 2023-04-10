import './button.css';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}>;

const Button = ( { className, children, disabled, onClick }: Props ) => (
  <button className={ classNames( [ className, disabled ? 'disabled' : '' ] ) } onClick={ disabled ? undefined : onClick }>
    { children }
  </button>
);


export default Button;
