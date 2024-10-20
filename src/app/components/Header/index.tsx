"use client";

import { signIn, useSession } from "next-auth/react";

import { ModeToggle } from "@/app/components/ModeToggle";
import { NewPoll } from "@/app/components/NewPoll";
import { UserNav } from "@/app/components/UserNav";
import { Button } from "@/components/ui/button";
import { HeaderNav } from "./HeaderNav";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function Header() {
  const [isLoadingSignIn, setIsLoadingSignIn] = useState(false);
  const session = useSession();

  const { toast } = useToast();

  const handleSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    console.log("hey");
    e.preventDefault();
    try {
      setIsLoadingSignIn(true);
      await signIn("google");
      setIsLoadingSignIn(false);
    } catch (error) {
      setIsLoadingSignIn(false);
      toast({
        title: "Ocorreu um erro",
        description: "Por favor, tente novamente mais tarde",
        duration: 5000,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="sticky left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center px-8">
        <div className="flex items-center space-x-10">
          <h1>Dog Voting</h1>

          {session.data && <HeaderNav />}
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div className="ml-auto">
            <NewPoll />
          </div>

          <ModeToggle />
          {session.data ? (
            <UserNav />
          ) : (
            <Button variant={"secondary"} onClick={handleSignIn}>
              Sign In
              {isLoadingSignIn && (
                <svg
                  className="ml-3 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/
                  2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V2.5"
                  ></path>
                </svg>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
