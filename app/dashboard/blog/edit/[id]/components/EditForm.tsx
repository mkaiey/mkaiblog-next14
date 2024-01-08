"use client"

import BlogForm from "@/app/dashboard/components/BlogForm";
import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { toast } from "@/components/ui/use-toast";
import { updateBlogDetailById } from "@/lib/actions/blog";
import { IBlogDetail } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";

export default function EditForm({ blog }: { blog: IBlogDetail }) {

  const router = useRouter();

  const handleEdit = async (data: BlogFormSchemaType) => {
    const result = await updateBlogDetailById(blog?.id!, data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      toast({
        title: "Fail to update blog 🤔",
        description: (
          <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      });
    } else {
      toast({
        title: `Successfully update ${data.title} 😍`,
      });

      router.push("/dashboard");
    }
  };

  return <BlogForm onHandleSubmit={handleEdit} blog={blog} />;
}
