export interface Project {
  id?: number;
  title: string;
  image: string;
  category: "banner" | "thumbnail" | "poster" | "feed";
  createdAt: string;
}
