"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { PersonIcon, ReaderIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
      Icon: ReaderIcon,
      text: "dashboard",
    },

    {
      href: "/dashboard/user",
      Icon: PersonIcon,
      text: "users",
    },
  ];

  return (
    <div className="flex items-center gap-5 border-b pb-2">
      {links.map(({ href, Icon, text }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={cn(
              "text-sm text-gray-400 flex  items-center gap-1 hover:underline transition-all",
              { "text-green-500 underline": pathname === href }
            )}
          >
            <Icon /> / {text}
          </Link>
        );
      })}
    </div>
  );
}
