import { IAttraction } from "./IAttraction";

export interface ILocality {
  id: number;
  name: string;
  attractions: IAttraction[];
}
