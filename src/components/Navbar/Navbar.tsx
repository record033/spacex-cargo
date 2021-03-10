import React, { useCallback, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useCargoData } from "src/contexts";

import { useInputStyles, useStyles } from "./styles";

const localStorageKey = "cargoData";

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const inputClasses = useInputStyles();
  const maybeCacheData = localStorage.getItem(localStorageKey);
  const [isLoadModalOpened, setIsLoadModalOpened] = useState(false);
  const [isSaveModalOpened, setIsSaveModalOpened] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { load, save, search, setSearch } = useCargoData();

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch?.(e.target.value);
    },
    [setSearch]
  );

  // Save modal handling
  //
  const handleSave = useCallback(() => {
    save();
    handleSaveModalOpen();
  }, [save]);

  const handleSaveModalOpen = () => {
    setIsSaveModalOpened(true);
  };
  const handleSaveModalClose = () => {
    setIsSaveModalOpened(false);
  };
  // Load modal handling
  //
  const handleLoad = useCallback(() => {
    load();
    handleLoadModalOpen();
    setIsLoaded(true);
  }, [load]);

  const handleLoadModalOpen = () => {
    setIsLoadModalOpened(true);
  };
  const handleLoadModalClose = () => {
    setIsLoadModalOpened(false);
  };

  return (
    <Box flexGrow="1">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            SpaceX Cargo Planner
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={inputClasses}
              value={search}
              onChange={handleChange}
            />
          </div>
          <Box flexGrow="1" />

          <div className={classes.sectionDesktop}>
            <Button variant="contained" size="large" onClick={handleLoad}>
              Load
            </Button>
            <Button
              variant="contained"
              size="large"
              disabled={!isLoaded}
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Dialog open={isLoadModalOpened} onClose={handleLoadModalClose}>
        <Box className={classes.dialogBox}>
          <Typography>
            Data has been loaded from{" "}
            {maybeCacheData ? "localStorage" : "JSON via fakeFetch"}
          </Typography>
          <Button
            variant="contained"
            size="small"
            onClick={handleLoadModalClose}
          >
            OK
          </Button>
        </Box>
      </Dialog>

      <Dialog open={isSaveModalOpened} onClose={handleLoadModalClose}>
        <Box className={classes.dialogBox}>
          <Typography>Data has been saved</Typography>
          <Button
            variant="contained"
            size="small"
            onClick={handleSaveModalClose}
          >
            OK
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
};
