import { useContext } from 'react';

import { cargoDataContext } from './CargoDataContext';

export const useCargoData = () => {
  return useContext(cargoDataContext);
};
