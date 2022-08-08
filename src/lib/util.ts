export const now = (): string => {
  const fmt = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

  const d = new Date();
  const YYYY = d.getFullYear();
  const MM = fmt(d.getMonth() + 1);
  const DD = fmt(d.getDate());
  const hh = fmt(d.getHours());
  const mm = fmt(d.getMinutes());

  return `${YYYY}${MM}${DD}_${hh}${mm}`;
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
