"use client";

import Link from "next/link";

import { BarChart, Vote } from "lucide-react";

export function HeaderNav() {
  return (
    <nav className="flex space-x-4">
      <Link
        href="/my-polls"
        className="flex items-center justify-center space-x-1 rounded-md p-2 text-primary ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Vote size={16} />
        <span>My Polls</span>
      </Link>

      <Link
        href="/polls"
        className="flex items-center justify-center space-x-1 rounded-md p-2 text-primary ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <BarChart size={16} />
        <span>All Polls</span>
      </Link>
    </nav>
  );
}
