export type IBlog = {
  id: string;
  title: string;
  image_url: string;
  date: string;
  is_premium: boolean;
  content: string;
  is_published: boolean;
};

export type IBlogDetail = {
  created_at: string;
  id: string;
  image_url: string;
  is_premium: boolean;
  is_published: boolean;
  title: string;
  blog_content: {
    blog_id: string;
    content: string;
    created_at: string;
  } | null;
} | null;

export type IBlogForm = {
  created_at: string;
  id: string;
  image_url: string;
  is_premium: boolean;
  is_published: boolean;
  title: string;
  blog_content: {
    blog_id: string;
    content: string;
    created_at: string;
  };
};
