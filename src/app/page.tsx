"use client";

import { signIn, useSession } from "next-auth/react";

import { Header } from "@/app/components/Header";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { CardExample } from "./components/CardExample";
import { Footer } from "./components/Footer";

const cardExamples = [
  {
    title: "What should I buy?",
    description: "Help me decide what to buy with my money",
    author: "André Tashiro",
    options: [
      {
        label: "Pizza",
        value: 20,
        votes: 10,
      },
      {
        label: "Hamburguer",
        value: 53,
        votes: 30,
      },
      {
        label: "New game",
        value: 27,
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
        value: 71,
        votes: 13,
      },
      {
        label: "Valorant",
        value: 19,
        votes: 3,
      },
      {
        label: "League of Legends",
        value: 10,
        votes: 2,
      },
    ],
  },
];

export default function Home() {
  const session = useSession();

  const { toast } = useToast();

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex-col md:flex">
        <Header />

        <section className="flex-1 space-y-6 p-8 pt-28">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h2 className="text-5xl font-bold tracking-tight">
              Create Your Poll
            </h2>

            <div className="flex items-center text-lg font-medium">
              <span>
                Create your polls and share with your friends and family
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-sm">
            <span>
              You can create public or private polls.{" "}
              <span
                className="cursor-pointer font-semibold underline"
                onClick={() => {
                  !session.data
                    ? signIn()
                    : toast({
                        title: "You are already signed in",
                        duration: 3500,
                      });
                }}
              >
                Sign in
              </span>{" "}
              to create your own polls.{" "}
              <span className="font-semibold">It's FREE!</span>
            </span>
          </div>
        </section>

        <section className="flex-1 p-8 pt-16">
          <div className="flex items-center justify-center space-x-4">
            {cardExamples.map((card, index) => (
              <CardExample key={index} {...card} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </TooltipProvider>
  );
}
