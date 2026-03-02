import type { TitleProps } from "./types";

export default function PrimaryTitle({
  primaryTitle,
  description,
}: TitleProps) {
  return (
    <div className="text-2xl font-bold flex flex-col items-start gap-2 mb-4">
      <h2>{primaryTitle}</h2>
      <p>{description}</p>
    </div>
  );
}
