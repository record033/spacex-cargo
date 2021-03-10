import React, { createContext, useCallback, useMemo, useState } from "react";
import { noop } from "lodash-es";

import { fakeRequest } from "src/helpers";
import { ICargo } from "src/types";

import { ICargoData } from "./types";

export const cargoDataContext = createContext<ICargoData>({
  data: null,
  search: "",
  setSearch: noop,
  edit: noop,
  load: noop,
  save: noop,
  getCargoById: () => null,
});

const localStorageKey = "cargoData";

export const CargoDataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ICargo[] | null>(null);
  const [search, setSearch] = useState<string>("");

  const handleLoad = useCallback(async () => {
    const maybeCacheData = localStorage.getItem(localStorageKey);

    if (maybeCacheData) {
      const parsedData = JSON.parse(maybeCacheData);

      setData(parsedData);

      return;
    }

    const downloadedData = await fakeRequest();

    setData(downloadedData);
  }, []);

  const handleSave = useCallback(() => {
    if (!data) {
      return;
    }

    const stringified = JSON.stringify(data);

    localStorage.setItem(localStorageKey, stringified);
  }, [data]);

  const handleEdit = useCallback(
    (id: string, newValue: string) => {
      if (!data) {
        return;
      }
      const cargoDataIndex = data.findIndex((x) => x.id === id);
      const cargoData = data[cargoDataIndex];

      data[cargoDataIndex] = {
        ...cargoData,
        boxes: newValue,
      };

      setData([...data]);
    },
    [data]
  );

  const filteredData: ICargo[] | null = useMemo(() => {
    if (!search || !data) {
      return data;
    }
    const formatedSearch = search.toLowerCase();

    const filteredData = data.filter((x) =>
      x.name.toLowerCase().includes(formatedSearch)
    );

    if (filteredData.length === 0) {
      return null;
    }

    return filteredData;
  }, [data, search]);

  const handleGetCargoById = useCallback(
    (id: string) => {
      return data?.find((x) => x.id === id) ?? null;
    },
    [data]
  );

  const values: ICargoData = useMemo(() => {
    return {
      data: filteredData,
      search,
      setSearch,
      edit: handleEdit,
      load: handleLoad,
      save: handleSave,
      getCargoById: handleGetCargoById,
    };
  }, [
    filteredData,
    search,
    handleEdit,
    handleLoad,
    handleSave,
    handleGetCargoById,
  ]);

  return (
    <cargoDataContext.Provider value={values}>
      {children}
    </cargoDataContext.Provider>
  );
};
