import { IProduct } from "@/types/products";

export const getProducts = async (productId?:string): Promise<IProduct[]> => {
    try {
        // const response = await fetch(
        //   "https://api.api-store.workers.dev/api/bazardor/products",
        //   {
        //     next: {
        //       revalidate: 3600,
        //     },
        //   }
        // );

        const url = productId
            ? `https://api.api-store.workers.dev/api/bazardor/products/${productId}`
            : `https://api.api-store.workers.dev/api/bazardor/products`;

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
