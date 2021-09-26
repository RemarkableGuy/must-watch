import { MeterClass } from "./meter-class";

export default interface TvSeries {
  title: string;
  startYear: number | null;
  endYear: number | null;
  url: string;
  meterClass: MeterClass;
  meterScore: number | null;
  image: string;
}
