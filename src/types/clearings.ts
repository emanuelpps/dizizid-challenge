import type { ID, Currency, ISODateString } from "@/types/common";
import type { ClearingPeriod } from "@/types/event";

export type ClearingStatus = "CLEARED" | "TO_BE_CLEARED";

export interface Clearing {
  id: ID;
  organizationId: ID;
  eventId: ID;
  reference: string;
  period: ClearingPeriod;
  currency: Currency;
  grossAmount: number;
  totalPlatformFees: number;
  totalServiceFees: number;
  netPayout: number;
  status: ClearingStatus;
  clearingDate?: ISODateString;
  paid: boolean;
  transactionIds: ID[];
  createdAt: ISODateString;
}
