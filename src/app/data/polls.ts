export interface CardExampleOption {
  label: string;
  votes: number;
}

export interface CardExample {
  title: string;
  description: string;
  author: string;
  options: CardExampleOption[];
}

export const cardExamples: CardExample[] = [
  {
    title: "What should I buy?",
    description: "Help me decide what to buy with my money",
    author: "André Tashiro",
    options: [
      {
        label: "Pizza",
        votes: 10,
      },
      {
        label: "Hamburguer",
        votes: 30,
      },
      {
        label: "New game",
        votes: 15,
      },
    ],
  },
  {
    title: "Next game to play",
    description: "You decide the game I will play next",
    author: "Albert Einstein",
    options: [
      {
        label: "Minecraft",
        votes: 46,
      },
      {
        label: "Valorant",
        votes: 22,
      },
      {
        label: "League of Legends",
        votes: 9,
      },
    ],
  },
];
