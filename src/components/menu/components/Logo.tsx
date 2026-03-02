import { FaMoneyBillWave } from "react-icons/fa";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-8">
      <div className="flex justify-center items-center gap-2 font-bold text-xl">
        <FaMoneyBillWave className="text-[#CFF75E]" />
        <p>Dizizid Platform Challenge</p>
      </div>
    </div>
  );
}
