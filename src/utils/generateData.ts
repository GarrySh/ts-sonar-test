export interface Item {
  name: string;
  value: number;
}

export const generateData = (count = 100): Item[] =>
  Array(count)
    .fill(null)
    .map((_value, index) => ({ name: `Name of line ${index}`, value: index }));
