import { ITableRow, IRollResult } from 'src/components/models';

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

export const tableRoll = (t: ITableRow[]): IRollResult => {
  const n = d(20);
  for (const row of t) {
    if (row.floor <= n) {
      if (row.ceiling && row.ceiling >= n) {
        return { roll: n, result: row.result };
      } else if (!row.ceiling && row.floor === n) {
        return { roll: n, result: row.result };
      }
    }
  }

  return { roll: n, result: 'No result, check table' };
};

export const coreRoll = (): IRollResult => {
  const table: ITableRow[] = [
    {
      floor: 1,
      result: 'CATASTROPHE! Oh no. You automatically fail, and you may suffer a severe setback.',
    },
    {
      floor: 2,
      ceiling: 5,
      result:
        "FAILURE. You fail your intended action and face a setback of the Guide's choice. You might lose equipment, take damage from an enemy counterattack, or face some other misfortune.",
    },
    {
      floor: 6,
      ceiling: 10,
      result: "TOUGH CHOICE. You succeed in your action, but there's a cost. The Guide will give you a choice between two setbacks.",
    },
    {
      floor: 11,
      ceiling: 19,
      result: "SUCCESS. You accomplish what you were trying to do without any compromises. If you're dealing damage, you deal the standard amount.",
    },
    {
      floor: 20,
      result:
        'TRIUMPH! This is an exciting moment. You automatically succeed at what you were trying to do, and you may even find added fortune. If you’re dealing damage, double it.',
    },
  ];

  return tableRoll(table);
};
