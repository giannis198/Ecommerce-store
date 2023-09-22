import { Size } from "@/types";

export const getSizes = async (): Promise<Size[]> => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;
  const res = await fetch(URL, { next: { revalidate: 3600 } });

  return res.json();
};
