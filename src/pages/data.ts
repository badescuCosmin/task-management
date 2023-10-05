export type CardType = {
  id: number;
  title: string;
  description: string;
  priority: PriorityType;
};

export type PriorityType = "Low" | "Medium" | "High";

export const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "do some work",
    priority: "Low",
  },
  {
    id: 2,
    title: "Card 2",
    description: "do some work 2",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Card 3",
    description: "do some work 3",
    priority: "High",
  },
  {
    id: 4,
    title: "Card 4",
    description: "do some work 4",
    priority: "Low",
  },
  {
    id: 5,
    title: "Card 6",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 11,
    title: "Card 7",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 6,
    title: "Card 8",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 7,
    title: "Card 9",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 8,
    title: "Card 5",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 9,
    title: "Card 5",
    description: "do some work 5",
    priority: "High",
  },
  {
    id: 10,
    title: "Card 5",
    description: "do some work 5",
    priority: "High",
  },
] as CardType[];
