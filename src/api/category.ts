import { ICategory } from "@/types/products";

export const getCategory = async (category?:string): Promise<ICategory[]> => {
  try {
    const url = category
      ? `https://api.api-store.workers.dev/api/bazardor/products?category=${category}`
      : `https://api.api-store.workers.dev/api/bazardor/categories`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch category");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching category:", error);
    return [];
  }
};
