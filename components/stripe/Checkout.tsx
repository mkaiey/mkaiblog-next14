import React, { ChangeEvent, useTransition } from "react";
import { Button } from "../ui/button";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useUser } from "@/lib/store/user";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import LoginForm from "../nav/LoginForm";
import { checkout } from "@/lib/actions/stripe";
import { usePathname } from "next/navigation";

export default function Checkout() {
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  const user = useUser((state) => state.user);

  const handleCheckOut = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const data = JSON.parse(
        await checkout(user?.email!, location.origin + pathname)
      );
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!
      );
      await stripe?.redirectToCheckout({ sessionId: data.id });
    });
  };

  if (!user?.id) {
    return (
      <div className="flex items-center h-96 w-full justify-center gap-2">
        <LoginForm /> to read content
      </div>
    );
  }

  return (
    <form
      onSubmit={handleCheckOut}
      className={cn(
        "flex items-center  w-full justify-center h-96 ",
        { hidden: !user?.id },
        { "animate-pulse": isPending }
      )}
    >
      <Button
        variant="ghost"
        className="flex flex-col p-10 gap-5 ring-2 ring-green-500"
      >
        <span className="flex items-center gap-2 text-2xl font-bold text-green-500">
          <LightningBoltIcon
            className={cn(
              "animate-bounce w-5 h-5",
              !isPending ? "animate-bounce" : "animate-spin"
            )}
          />
          Upgrade to Pro
        </span>
        <span>Unlock all blog contents</span>
      </Button>
    </form>
  );
}
