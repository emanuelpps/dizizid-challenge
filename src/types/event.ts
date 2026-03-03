import type { ID } from "@/types/common";

export type ClearingPeriod = "WEEKLY" | "MONTHLY" | "ON_DEMAND";

export interface EventType {
  id: ID;
  organizationId: ID;
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  clearingPeriod: ClearingPeriod;
}
