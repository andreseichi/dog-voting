import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface CardExampleProps {
  title: string;
  description: string;
  author: string;
  options: {
    label: string;
    value: number;
    votes: number;
  }[];
}

export function CardExample({
  title,
  description,
  author,
  options,
}: CardExampleProps) {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <span className="text-sm font-medium">
          Total votes: {options.reduce((acc, option) => acc + option.votes, 0)}
        </span>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="option-one">
          {options.map((option, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center space-y-1">
                  <span>{option.label}</span>
                  <Progress value={option.value} />
                </div>
              </TooltipTrigger>

              <TooltipContent>{option.votes} votes</TooltipContent>
            </Tooltip>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/avatars/01.png" alt="Avatar Image" />
          <AvatarFallback>
            {author
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>

        <span>{author}</span>
        {/* <Button className="w-full">Vote</Button> */}
      </CardFooter>
    </Card>
  );
}
