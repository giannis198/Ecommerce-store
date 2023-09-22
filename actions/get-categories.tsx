import { Category } from "@/types";

export const getCategories = async (): Promise<Category[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
  const res = await fetch(URL, { next: { revalidate: 3600 } });

  return res.json();
};
