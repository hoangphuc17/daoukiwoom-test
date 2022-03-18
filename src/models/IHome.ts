export interface IInfoTab {
  number: string;
  info: string;
}
export interface ITab {
  text: string;
  data: IInfoTab[];
}
export interface IBoxServiceTag {
  tagName: string;
  desc: string;
}
export interface IBoxService {
  className?: string;
  image: string;
  name: string;
  tags: IBoxServiceTag[];
  i: number;
}

export interface IBoxPrice {
  className?: string;
  name: string;
  desc: string;
  price: string;
  unit: "usd" | "vnd";
}
