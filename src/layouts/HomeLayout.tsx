import React from 'react';
import { Box } from '@material-ui/core';

import { Aside, Navbar } from 'src/components';

export const HomeLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box display='flex'>
        <Aside />
        {children}
      </Box>
    </>
  );
};
