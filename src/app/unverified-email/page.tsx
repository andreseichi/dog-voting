"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UnverifiedEmailPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col space-y-3 text-center">
        <span className="text-3xl font-semibold">E-mail não verificado</span>
        <span>Seu E-mail não é verificado ainda</span>

        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Sair
        </Button>
      </div>
    </div>
  );
}
