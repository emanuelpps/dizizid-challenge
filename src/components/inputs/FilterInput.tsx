import type { InputProps } from "@components/inputs/types";

export default function FilterInput({
  label,
  placeholder,
  type,
  onChange,
  value,
  className,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
        {label}
      </label>
      <input
        type={type}
        className="bg-[#1A1A1A] border border-gray-800 rounded-md p-2 text-sm focus:border-gray-600 transition-colors duration-200 focus:outline-none text-white"
        placeholder={placeholder}
        onChange={onChange}
        value={value ?? ""}
      ></input>
    </div>
  );
}
