import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { pathToUrl } from 'src/helpers';
import { HomeLayout } from 'src/layouts';
import { Paths } from 'src/paths';

import { HomePage } from './HomePage/HomePage';

const notFoundRedirect = pathToUrl(Paths.Home);

export const Pages: React.FC = () => {
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
    </HomeLayout>
  );
};
