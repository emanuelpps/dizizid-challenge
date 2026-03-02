import PrimaryButton from "../../../components/buttons/PrimaryButton";
import Dropdown from "../../../components/dropdowns/Dropdown";
import FilterInput from "../../../components/inputs/FilterInput";
import BoxContainer from "../../../components/layout/BoxContainer";
import { IoIosSearch } from "react-icons/io";

export default function FilterBox() {
  return (
    <div className="flex w-full justify-center items-center">
      <BoxContainer className="flex">
        <div className="flex gap-6 w-full">
          <FilterInput label="Year" placeholder="Filter" type="date" />
          <FilterInput label="Week" placeholder="Filter" type="number" />
          <Dropdown label="Status" options={[]} value="" onChange={() => {}} />
          <Dropdown label="Type" options={[]} value="" onChange={() => {}} />
        </div>
        <div className="flex w-full justify-end">
          <PrimaryButton icon={<IoIosSearch />} children="Search" />
        </div>
      </BoxContainer>
    </div>
  );
}
