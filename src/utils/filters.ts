import type { FilterValues } from "../views/clearings/types";
import type { Clearing } from "../types/clearings";
import { getWeekNumber } from "./getWeekNumber";

export const applyFilters = (data: Clearing[], filters: FilterValues) => {
  return data.filter((item) => {
    const itemDate = new Date(item.createdAt);

    const orgMatch =
      filters.org === "all" || item.organizationId === filters.org;

    const statusMatch =
      filters.status === "all" ||
      item.status.toLowerCase() === filters.status;

    const yearMatch =
      !filters.year ||
      itemDate.getFullYear().toString() === filters.year;

    const weekMatch =
      !filters.week ||
      getWeekNumber(itemDate) === Number(filters.week);

    return orgMatch && statusMatch && yearMatch && weekMatch;
  });
};

