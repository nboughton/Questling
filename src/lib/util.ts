import { ITableRow } from 'src/components/models';

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

export const deepCopy = <T>(obj: T): T => JSON.parse(JSON.stringify(obj)) as T;

export const d = (n: number): number => Math.floor(Math.random() * n) + 1;

export const tableRoll = (t: ITableRow[]): string => {
  const n = d(20);
  for (const row of t) {
    if (row.floor <= n) {
      if (row.ceiling && row.ceiling >= n) {
        return row.result;
      } else if (!row.ceiling && row.floor === n) {
        return row.result;
      }
    }
  }

  return 'No result, check table';
};
