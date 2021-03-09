import { random } from 'lodash-es';

import fakeData from '../shipments.json';
import { ICargo } from '../types';

export const fakeRequest = (): Promise<ICargo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, random(300, 1000));
  });
};
