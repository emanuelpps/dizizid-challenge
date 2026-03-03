import { useState } from "react";
import FilterBox from "@/views/clearings/components/FilterBox";
import Header from "@/views/clearings/components/Header";
import Table from "@/views/clearings/components/Table";
import clearingsData from "@data/clearings.json";
import organizationsData from "@data/organizations.json";
import type { Clearing } from "@/types/clearings";
import type { FilterValues } from "@/views/clearings/types";
import type { OrganizationType } from "@/types/organization";
import { applyFilters } from "@utils/filters";

const organizations = organizationsData as OrganizationType[];
const initialData = clearingsData as Clearing[];
export default function Clearings() {
  const [filters, setFilters] = useState<FilterValues>({
    org: "all",
    status: "all",
    year: "",
    week: "",
  });

  const [filteredData, setFilteredData] = useState<Clearing[]>(initialData);

  const handleSearch = (filters: FilterValues) => {
    const results = applyFilters(initialData, filters);
    setFilteredData(results);
  };

  const handleReset = () => {
    setFilters({
      org: "all",
      status: "all",
      year: "",
      week: "",
    });
    setFilteredData(initialData);
  };

  return (
    <section className="flex flex-col w-[90%] mx-auto">
      <Header />
      <FilterBox
        filterValues={filters}
        setFilterValues={setFilters}
        onSearch={handleSearch}
        onReset={handleReset}
        organizations={organizations}
      />
      <Table data={filteredData} organizations={organizations} />
    </section>
  );
}
