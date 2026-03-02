import type { Currency, ID, ISODateString } from "./common";

export type PaymentStatus = "COMPLETED" | "TO_BE_PROCESSED" | "FAILED";

export type TransactionStatus = "COMPLETED" | "TO_BE_PROCESSED" | "REFUNDED";

export interface TransactionType {
  id: ID;
  eventId: ID;
  transactionId: string;
  ticketOwnerFirstName: string;
  ticvketOwnerLastName: string;
  ticketOwnerEmail: string;
  amount: number;
  currency: Currency;
  platformFee: number;
  serviceFee: number;
  netAmount: number;
  paymentStatus: PaymentStatus;
  transactionStatus: TransactionStatus;
  dateUtc: ISODateString;
}
