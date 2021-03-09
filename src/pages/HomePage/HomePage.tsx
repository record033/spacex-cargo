import React, { useCallback } from 'react';
import { Redirect, useParams } from 'react-router';
import { Typography } from '@material-ui/core';

import { EditCargoInput } from 'src/components';
import { useCargoData } from 'src/contexts';
import { pathToUrl } from 'src/helpers';
import { Paths } from 'src/paths';

import { useStyles } from './styles';
import { ICargoPageParams } from './types';

const fallbackUrl = pathToUrl(Paths.Home);

const localStorageKey = 'cargoData';

export const HomePage: React.FC = () => {
  const { companyId } = useParams<ICargoPageParams>();
  const { data, getCargoById, edit } = useCargoData();
  const maybeCacheData = localStorage.getItem(localStorageKey);
  const classes = useStyles();
  const currentCargo = getCargoById(companyId);

  const handleEdit = useCallback(
    (newValue: string) => {
      edit(companyId, newValue);
    },
    [edit, companyId],
  );

  if (companyId && !data) {
    return <Redirect to={fallbackUrl} />;
  }

  if (!maybeCacheData) {
    return (
      <div className={classes.homePageBox}>
        <Typography>
          <p>Click Load to fakeFetch data and then select item to edit</p>
        </Typography>
      </div>
    );
  }

  if (!currentCargo) {
    return (
      <Typography>
        <p>Click LOAD to get data from localStorage, edit and SAVE it</p>
      </Typography>
    );
  }

  return (
    <div className={classes.homePageBox}>
      <Typography variant='h2'>{currentCargo.name}</Typography>
      <Typography variant='h4'>{currentCargo.email}</Typography>

      <EditCargoInput boxesValue={currentCargo.boxes} onEdit={handleEdit} />
    </div>
  );
};
