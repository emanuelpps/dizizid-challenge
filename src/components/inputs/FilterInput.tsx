import type { InputProps } from "./types";

export default function FilterInput({ label, placeholder }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
        {label}
      </label>
      <input
        className="bg-[#1A1A1A] border border-gray-800 rounded-md p-2 text-sm focus:border-gray-600 w-32 transition-colors duration-200 focus:outline-none"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
