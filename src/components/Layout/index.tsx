import React, { ReactNode } from 'react';

import { Wrapper } from './style';

const Layout: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
