import './popup.css';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
}>;

const Popup = ( { children, className }: Props ) => {
  return (
    <div className={ [ 'popup-container', className ].join( ' ' ) }>
      <div className='popup'>
        { children }
      </div>
    </div>
  );
};

export default Popup;
