import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  href?: string;
}>;

const DowloadLink = ( { href, children }: Props ) => {
  if ( !href )
    return <>{ children }</>;

  return <a download href={ href }>{ children }</a>;
};

export default DowloadLink;
