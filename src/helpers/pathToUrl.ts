import { generatePath } from 'react-router';

import { Params } from 'src/paths/params';

export const pathToUrl = (
  path: string,
  params: Partial<Record<keyof typeof Params, string | number | undefined>> = {},
) => {
  return generatePath(path, params) || '/';
};
