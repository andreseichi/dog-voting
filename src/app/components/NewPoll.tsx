import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function NewPoll() {
  return (
    <Button className="relative space-x-2 rounded-md">
      <Plus className="mr-2" />
      New poll
    </Button>
  );
}
