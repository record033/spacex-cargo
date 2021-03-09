import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { useCargoData } from 'src/contexts';
import { pathToUrl } from 'src/helpers';
import { Paths } from 'src/paths';

import { useStyles } from './styles';

export const Aside: React.FC = () => {
  const classes = useStyles();

  const { data } = useCargoData();

  if (!data) {
    return null;
  }

  return (
    <div className={classes.root}>
      <List component='nav' className={classes.linksList}>
        {data.map((x) => (
          <NavLink
            key={x.id}
            to={pathToUrl(Paths.Home, {
              companyId: x.id,
            })}
            exact activeClassName={classes.activeLink}
            className={classes.itemLink}
          >
            <ListItem>
              <ListItemText>{x.name}</ListItemText>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );
};
