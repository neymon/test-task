import './popup.css';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  className?: string;
}>;

const Popup = ( { children, className }: Props ) => {
  return (
    <div className={ classNames( [ 'popup-container', className ] ) }>
      <div className='popup'>
        { children }
      </div>
    </div>
  );
};

export default Popup;
