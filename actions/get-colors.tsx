import { Color } from "@/types";

export const getColors = async (): Promise<Color[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;
  const res = await fetch(URL, { next: { revalidate: 0 } });

  return res.json();
};
