import { ReactNode } from "react";

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
  rowID?: string | undefined;
  inputType: string;
  isPending?: boolean;
  rowName?: string | undefined;
  register?: object;
  children?: string | ReactNode;
  error?: string | undefined;
  label?: string;
};

export type ButtonType = {
  clickHandler?:
    | ((e: Event | unknown) => void)
    | React.MouseEventHandler<HTMLButtonElement>
    | undefined;
  variant: string;
  type: "submit" | "reset" | "button" | undefined;
  children?: string | ReactNode;
  disabled?: boolean;
  status?: string;
  id?: string;
};

export type FormTypes = {
  gameName: string;
  gameDesigner: string;
  releaseYear: string;
  playerCountFrom: string;
  playerCountTo: string;
  bestPlayerCountFrom: string;
  bestPlayerCountTo: string;
  capitalization: string;
  bggLink: string;
  rulesLink: string;
  bankSize: string | object;
  currencySymbol: string;
  certLimitJSON: object;
  minorsJSON: object;
  privatesJSON: object;
  companiesJSON: object;
  phasesJSON: object;
  trainsJSON: object;
  marketJSON: object;
  startingMoneyJSON: object;
  mcGuffins: string;
};

export type PhaseTypes = {
  name: string;
  on: string;
  train_limit: string;
  tiles: Array<string>;
  operating_rounds: string;
  status: Array<string>;
};

export type TrainType = [
  {
    obsolete_on: string;
    events: [{ type: string }];
    variants: [
      {
        name: string;
        price: string;
        distance: [{ pay: string; visit: string }];
      }
    ];
    name: string;
    price: string;
    distance: string[];
    rusts_on: string;
  }
];

export type PlayerSessionType = {
  playerName: string;
  cash: number;
  value: number;
  shares: object;
};
