import React, { useCallback } from "react";
import { Redirect, useParams } from "react-router";
import { Typography } from "@material-ui/core";

import { EditCargoInput } from "src/components";
import { useCargoData } from "src/contexts";
import { pathToUrl } from "src/helpers";
import { Paths } from "src/paths";

import { useStyles } from "./styles";
import { ICargoPageParams } from "./types";

const fallbackUrl = pathToUrl(Paths.Home);

export const HomePage: React.FC = () => {
  const { companyId } = useParams<ICargoPageParams>();
  const { getCargoById, edit } = useCargoData();

  const classes = useStyles();
  const currentCargo = getCargoById(companyId);

  const handleEdit = useCallback(
    (newValue: string) => {
      edit(companyId, newValue);
    },
    [edit, companyId]
  );

  if (!companyId || !currentCargo) {
    return <Redirect to={fallbackUrl} />;
  }

  return (
    <div className={classes.homePageBox}>
      <Typography variant="h2">{currentCargo.name}</Typography>
      <Typography variant="h4">{currentCargo.email}</Typography>

      <EditCargoInput boxesValue={currentCargo.boxes} onEdit={handleEdit} />
    </div>
  );
};
