import { IoChevronDownSharp } from "react-icons/io5";

interface Option {
  label: string | number;
  value: string;
}

interface DropwdownProps {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
}

export default function Dropdown({
  label,
  options,
  value,
  onChange,
  className,
}: DropwdownProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
        {label}
      </label>
      <div className="relative group">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#0F0F0F] text-sm text-gray-200 border border-gray800 rounded-md py-2.5 px-3 pr-10 appearance-none cursor-pointer focus:outlione-none focus:border-gray-600 focus:ring-1 focus:ring-gray-700 transition-all hover:bg-[#1A1A1A]"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#141414]"
            >
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-20 text-gray-500">
          <IoChevronDownSharp className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
