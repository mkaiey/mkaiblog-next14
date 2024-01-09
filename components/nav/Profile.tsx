import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "../ui/button";
import { DashboardIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { createBrowserClient } from "@supabase/ssr";
import ManageBilling from "../stripe/ManageBilling";

export default function Profile() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const isAdmin = user?.role === "admin";
  const isSub = user?.subscription_status;

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          src={user?.image_url || ""}
          alt={user?.display_name || ""}
          width={50}
          height={50}
          className="rounded-full ring-2 ring-green-500"
        />
      </PopoverTrigger>
      <PopoverContent className="space-y-3 p-2 divide-y" side="bottom">
        <div className="px-4 text-sm">
          <p>{user?.display_name}</p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        {isAdmin && (
          <Link href="/dashboard" className="block">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center"
            >
              Dashboard <DashboardIcon />
            </Button>
          </Link>
        )}
        {isSub && <ManageBilling />}
        <Button
          variant="ghost"
          className="w-full flex justify-between items-center"
          onClick={handleLogout}
        >
          Log out <LockOpen1Icon />
        </Button>
      </PopoverContent>
    </Popover>
  );
}
