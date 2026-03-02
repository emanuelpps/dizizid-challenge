import type { ID, Currency, ISODateString } from "./common";

export type OrganizationStatus = "ACTIVE" | "INACTIVE";

export interface OrganizationType {
  id: ID;
  name: string;
  legalName: string;
  country: string;
  defaultCurrency: Currency;
  email: string;
  createdAt: ISODateString;
  status: OrganizationStatus;
}
