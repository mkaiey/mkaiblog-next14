import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="max-w-7xl py-10 px-5 md:p-0 space-y-5 mx-auto flex justify-between md:items-end flex-col md:flex-row">
        <div className="space-y-10">
          <div className="space-y-2 w-full sm:w-96">
            <h1 className="text-3xl font-bold">Mkai Blog</h1>
            <p className="">
              Explore a world of captivating stories and insightful articles on
              our blog. Stay updated with our diverse collection of blog posts,
              written by passionate contributors who share their expertise and
              unique perspectives.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <GitHubLogoIcon className="w-5 h-5" />
            <LinkedInLogoIcon className="w-5 h-5" />
            <DiscordLogoIcon className="w-5 h-5" />
          </div>
        </div>

        <h1 className="text-sm">&copy; 2024 MkaiBlog. All right reserved</h1>
      </div>
    </footer>
  );
}
