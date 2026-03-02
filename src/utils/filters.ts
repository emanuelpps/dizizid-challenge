import type { Clearing } from "../types/clearings";
import type { FilterValues } from "../views/clearings/types";
import { getWeekNumber } from "./getWeekNumber";

export const applyFilters = (
  data: Clearing[],
  filters: FilterValues,
): Clearing[] => {
  return data.filter((item) => {
    const org =
      filters.org === "all" || String(item.organizationId) === filters.org;

    const status =
      filters.status === "all" ||
      item.status.toLowerCase() === filters.status.toLowerCase();

    const year = !filters.year || item.createdAt.includes(filters.year);

    const week =
      !filters.week || getWeekNumber(item.createdAt) === Number(filters.week);
    return org && status && year && week;
  });
};
