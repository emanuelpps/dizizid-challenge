import type { ButtonProps } from "./types";

export default function TertiaryButton({
  children,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 text-red-500 text-black font-bold hover:text-red-400 transition-colors uppercase tracking-wider cursor-pointer justify-center bg-gray-800 px-4 py-2 rounded-lg hover:bg-[#1A1A1A] transition-colors duration-200"
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
