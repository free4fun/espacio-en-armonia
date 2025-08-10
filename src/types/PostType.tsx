type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  image: string | undefined;

  content: string;
};

export type { BlogPost };