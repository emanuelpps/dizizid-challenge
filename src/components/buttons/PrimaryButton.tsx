import type { ButtonProps } from "./types";

export default function PrimaryButton({ children, icon }: ButtonProps) {
  return (
    <button className="bg-[#CFF75E] text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-[#b8dd54] transition-colors duration-200">
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
