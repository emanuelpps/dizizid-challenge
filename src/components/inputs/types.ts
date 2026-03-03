export interface InputProps {
  label: string;
  placeholder: string;
  type: "number" | "text" | "date";
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
