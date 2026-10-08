import { IProduct } from "@/types/products";

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching category:", error);
    return [];
  }
};
