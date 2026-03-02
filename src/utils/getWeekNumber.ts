export function getWeekNumber(dateString: string): number {
  const date = new Date(dateString);
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000),
  );
  return Math.ceil((days + startDate.getDay() + 1) / 7);
}
