import {TransactionType} from "@/app/enum/transaction.enum";

export interface Transaction {
    type: TransactionType;
    amount: number;
    date: Date;
    dateFormated: string;
    classAmount: string;
}
