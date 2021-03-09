import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { sumBy } from 'lodash-es';

import { useStyles } from './styles';
import { IEditCargoInput } from './types';

const validateRegex = /^((\d+(\.\d+)?),?)+$/;

export const EditCargoInput: React.FC<IEditCargoInput> = ({ boxesValue, onEdit }) => {
  const [currentValue, setCurrentValue] = useState(boxesValue ?? '');
  const classes = useStyles();
  const [error, setError] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;setCurrentValue(value);
    const isValid = validateRegex.test(value);
    setError(!isValid);
  }, []);

  useEffect(() => {
    setCurrentValue(boxesValue ?? '');
    setError(false);
  }, [boxesValue]);

  const handleEdit = () => {
    onEdit?.(currentValue);
  };

  let cargosBays = 0;

  if (currentValue) {
    const stringifiedBoxes = currentValue.split(',');
    const amount = sumBy(stringifiedBoxes, (x) => +x) / 10;
    cargosBays = Math.ceil(amount);
  }

  return (
    <>
      <Typography>Number of required cargos bays {cargosBays}</Typography>
      <TextField
        value={currentValue}
        label='Cargo Boxes'
        onChange={handleChange}
        error={error}
        helperText={error ? 'Invalid cargo pattern' : undefined}
      />
      <Button
        onClick={handleEdit}
        variant='contained'
        disabled={error}
        className={classes.saveValueButton}
      >
        Save value
      </Button>
    </>
  );
};
