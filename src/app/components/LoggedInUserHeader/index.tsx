"use client";

import { ModeToggle } from "@/app/components/ModeToggle";
import { NewPoll } from "@/app/components/NewPoll";
import { UserNav } from "@/app/components/UserNav";
import { BarChart, Vote } from "lucide-react";
import Link from "next/link";

export function LoggedInUserHeader() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center px-8">
        <div className="flex items-center space-x-10">
          <h1>Dog Voting</h1>

          <nav className="flex space-x-4">
            <Link
              href="/my-polls"
              className="flex items-center justify-center space-x-1 rounded-md p-1 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Vote size={16} />
              <span>My Polls</span>
            </Link>

            <Link
              href="/polls"
              className="flex items-center justify-center space-x-1 rounded-md p-1 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <BarChart size={16} />
              <span>All Polls</span>
            </Link>
          </nav>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div className="ml-auto">
            <NewPoll />
          </div>

          <ModeToggle />

          <UserNav />
        </div>
      </div>
    </div>
  );
}
