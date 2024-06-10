export type MinorType = {
  color: string;
  name: string;
  sym: string;
  tokens: Array<string>;
};

export type CorpType = {
  name: string;
  color: string;
  sym: string;
  tokens: Array<string>;
  abilities: Array<{ desc_detail: string }>;
};

export type PrivType = {
  name: string;
  sym: string;
  currencySymbol: string;
  value: number;
  revenue: number;
  desc: string;
};

export type FormInputType = {
  rowID: string;
  inputType: string;
  isLoading: boolean;
  rowName: string | null;
  register: object;
  children: string;
  error: string | undefined;
  label: string;
};
