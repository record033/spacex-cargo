import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Box, Button, Dialog, makeStyles, Typography } from "@material-ui/core";

import { pathToUrl } from "src/helpers";
import { HomeLayout } from "src/layouts";
import { Paths } from "src/paths";

import { HomePage } from "./HomePage/HomePage";

const notFoundRedirect = pathToUrl(Paths.Home);

const useStyles = makeStyles(() => ({
  dialogBox: {
    width: "15em",
    height: "auto",
    textAlign: "center",
    margin: "1em 0 1em 0",
  },
}));

export const Pages: React.FC = () => {
  const classes = useStyles();

  const [isModalOpened, setIsModalOpened] = useState(true);
  const handleClose = () => {
    setIsModalOpened(false);
  };

  return (
    <HomeLayout>
      <Switch>
        <Route path={Paths.Home} exact>
          <HomePage />
        </Route>
        <Route path={Paths.NotFound}>
          <Redirect to={notFoundRedirect} />
        </Route>
      </Switch>
      <Dialog open={isModalOpened}>
        <Box className={classes.dialogBox}>
          <Typography>Click LOAD to fetch data</Typography>
          <Button onClick={handleClose}>OK</Button>
        </Box>
      </Dialog>
    </HomeLayout>
  );
};
