import { NewPoll } from "@/app/components/NewPoll";
import { ModeToggle } from "./ModeToggle";
import { UserNav } from "@/app/components/UserNav";

export function Header() {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center px-8">
        <h1>Dog Voting</h1>

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
