import { IBlog } from "@/lib/types";
import React from "react";
import Image from "next/image";
import BlogContent from "./components/BlogContent";

// export async function generateStaticParams() {
// 	const { data: blogs } = await fetch(
// 		process.env.SITE_URL + "/api/blog?id=*" + "*"
// 	).then((res) => res.json());

// 	return blogs;
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
// 	const { data: blog } = (await fetch(
// 		process.env.SITE_URL + "/api/blog?id=" + params.id
// 	).then((res) => res.json())) as { data: IBlog };

// 	return {
// 		title: blog?.title,
// 		authors: {
// 			name: "Project Pro.",
// 		},
// 		openGraph: {
// 			title: blog?.title,
// 			url: process.env.SITE_URL + "/blog/" + params.id,
// 			siteName: "Mkai Blog",
// 			images: blog?.image_url,
// 			type: "website",
// 		},
// 		keywords: ["mkai blog", "projectpro", "mkaidev"],
// 	};
// }

export default async function page({ params }: { params: { id: string } }) {
  const { data: blog } = (await fetch(
    process.env.SITE_URL + "/api/blog?id=" + params.id
  ).then((res) => res.json())) as { data: IBlog };

  if (!blog?.id) {
    return <h1 className="text-white">Not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto min-h-screen  pt-10 space-y-10">
      <div className="sm:px-10 space-y-5">
        <h1 className=" text-3xl font-bold dark:text-gray-200">
          {blog?.title}
        </h1>
        <p className="text-sm dark:text-gray-400">
          {new Date(blog?.created_at!).toDateString()}
        </p>
      </div>

      <div className="w-full h-96 relative">
        <Image
          priority
          src={blog?.image_url!}
          alt="cover"
          fill
          className=" object-cover object-center rounded-md border-[0.5px] border-zinc-600"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <BlogContent blogId={blog.id} />
    </div>
  );
}
