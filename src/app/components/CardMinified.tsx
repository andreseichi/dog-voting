import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function CardMinified({ isFinished = false }) {
  return (
    <Card className={cn("bg-background", isFinished && "bg-muted")}>
      <CardHeader>
        <CardTitle className="flex flex-1">
          <span className="">title</span>

          <span className="flex place-self-end">date</span>
        </CardTitle>
        <CardDescription>description</CardDescription>
        <span className="text-sm font-medium">Total votes: totalVotes</span>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="option-one">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex flex-col items-center space-y-1">
                <span>label - porcentagem</span>
                <Progress className="h-6" value={80} label="23 (20%)" />
              </div>
            </TooltipTrigger>

            <TooltipContent> votes</TooltipContent>
          </Tooltip>
        </RadioGroup>
      </CardContent>
      <CardFooter className="space-x-2">
        {/* <Avatar className="h-8 w-8">
          <AvatarImage src="" alt="Avatar Image" />
          <AvatarFallback>
            {author
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar> */}

        {/* <Button className="w-full">Vote</Button> */}
      </CardFooter>
    </Card>
  );
}
