import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BarChart, Vote } from "lucide-react";

export function HeaderNav() {
  return (
    <nav className="flex">
      <Link href="/polls" className="flex items-center justify-center">
        <Button
          variant={"link"}
          className="items-center justify-center space-x-1"
        >
          <Vote size={16} />
          <span>Polls</span>
        </Button>
      </Link>

      <Link href="/new-poll" className="flex items-center justify-center">
        <Button variant={"link"} className="space-x-1">
          <BarChart size={16} />
          <span>Results</span>
        </Button>
      </Link>
    </nav>
  );
}
