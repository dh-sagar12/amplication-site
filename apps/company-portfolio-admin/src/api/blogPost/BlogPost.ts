export type BlogPost = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  publishDate: Date | null;
  author: string | null;
  content: string | null;
};
