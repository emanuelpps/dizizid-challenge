import { useMemo, useState } from "react";
import FilterBox from "./components/FilterBox";
import Header from "./components/Header";
import Table from "./components/Table";
import clearingsData from "../../data/clearings.json";
import organizationsData from "../../data/organizations.json";
import type { Clearing } from "../../types/clearings";
import type { FilterValues } from "./types";
import { applyFilters } from "../../utils/filters";
import type { OrganizationType } from "../../types/organization";

export default function Clearings() {
  const allData = useMemo(() => clearingsData as Clearing[], []);

  const organizations = useMemo(
    () => organizationsData as OrganizationType[],
    [],
  );

  const [filters, setFilters] = useState<FilterValues>({
    org: "all",
    status: "to_be_cleared",
    year: "",
    week: "",
  });

  const filteredData = useMemo(() => {
    return applyFilters(allData, filters);
  }, [allData, filters]);

  const handleReset = () => {
    setFilters({
      org: "all",
      status: "all",
      year: "",
      week: "",
    });
  };

  return (
    <section className="flex flex-col w-[90%] mx-auto">
      <Header />
      <FilterBox
        filterValues={filters}
        setFilterValues={setFilters}
        onSearch={() => {}}
        onReset={handleReset}
        organizations={organizations}
      />
      <Table data={filteredData} organizations={organizations} />
    </section>
  );
}
