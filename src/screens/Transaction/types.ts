import { ImageSourcePropType } from "react-native";

export type TransactionType = {
image:ImageSourcePropType;
currency:string;
code:string;
wallet: {
  value: string,
  crypto: string,
},
transactionHistory: Array<TransactHistoryTpe>
};

type TransactHistoryTpe =   {
  id: number,
  description: string,
  amount: number,
  currency: string,
  type:string, 
  date: string,
};
