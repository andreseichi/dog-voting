import { CardMinified } from "@/app/components/CardMinified";
import { Header } from "@/app/components/Header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Polls",
  description: "My polls page",
};

export default function MyPolls() {
  return (
    <div>
      <Header />
      <TooltipProvider delayDuration={0}>
        <section className="flex-1 space-y-6 px-8 pt-12">
          <span className="text-2xl font-semibold">My Polls:</span>

          <div className="grid flex-1 gap-4">
            <CardMinified />
            <CardMinified />
            <CardMinified />
          </div>
        </section>
      </TooltipProvider>
    </div>
  );
}
