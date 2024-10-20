import { Header } from "@/app/components/Header";

import { TooltipProvider } from "@/components/ui/tooltip";
import { CardExample } from "./components/CardExample";
import { Footer } from "./components/Footer";
import { MainSection } from "./components/MainSection";
import { cardExamples } from "./data/polls";

export default function Home() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen flex-col md:flex">
        <Header />

        <MainSection />

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
