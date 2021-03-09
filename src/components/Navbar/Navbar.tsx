import React, { useCallback } from 'react';
import { AppBar, Box, Button, InputBase, Toolbar, Typography } from '@material-ui/core';

import { useCargoData } from 'src/contexts';

import { useInputStyles, useStyles } from './styles';

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const inputClasses = useInputStyles();

  const { data, load, save, search, setSearch } = useCargoData();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch?.(e.target.value);
    },
    [setSearch],
  );

  const handleLoad = useCallback(() => {
    load();
  }, [load]);

  return (
    <Box flexGrow='1'>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            SpaceX Cargo Planner
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder='Search…'
              classes={inputClasses}
              value={search}
              onChange={handleChange}
            />
          </div>
          <Box flexGrow='1' />

          <div className={classes.sectionDesktop}>
            <Button variant='contained' size='large' onClick={handleLoad}>
              Load
            </Button>
            <Button variant='contained' size='large' disabled={!data} onClick={save}>
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
