import CastItem from "./cast-item";
import { MeterClass } from "./meter-class";

export default interface Movie {
  name: string;
  year: number;
  url: string;
  image: string;
  meterClass: MeterClass;
  meterScore: number | null;
  castItems: CastItem[];
  subline: null | string;
}
