import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center space-x-2 border-t bg-primary-foreground px-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2024 Dog Poll. All rights reserved.
      </p>
      <div className="space-x-1">
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0",
            )}
          >
            <Icons.gitHub className="h-3 w-3 fill-current" />

            <span className="sr-only">GitHub</span>
          </div>
        </Link>

        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0",
            )}
          >
            <Icons.twitter className="h-3 w-3 fill-current" />

            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </div>
    </footer>
  );
}
