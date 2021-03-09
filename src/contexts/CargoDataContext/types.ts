import { ICargo } from 'src/types';

export interface ICargoData {
  data: ICargo[] | null;
  search:string;
  load(): void;
  save(): void;
  edit(id: string, newValue: string): void;
  getCargoById(id: string): ICargo | null;
  setSearch(newSearch:string) : void
}
