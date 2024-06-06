export interface MinorInt {
  color: string;
  name: string;
  sym: string;
  tokens: Array<string>;
}

export interface CorpInt {
  name: string;
  color: string;
  sym: string;
  tokens: Array<string>;
  abilities: Array<{ desc_detail: string }>;
}

export interface PrivInt {
  name: string;
  sym: string;
  currencySymbol: string;
  value: number;
  revenue: number;
  desc: string;
}
