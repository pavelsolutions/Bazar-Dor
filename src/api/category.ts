// import { ICategory, IProduct } from "@/types/products";

// // ================= GET ALL CATEGORIES =================

// export const getCategories = async (): Promise<ICategory[]> => {
//   try {
//     const response = await fetch(
//       "https://openapi.programming-hero.com/api/bazardor/categories",
//       {
//         next: {
//           revalidate: 3600,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch categories");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     return [];
//   }
// };

// // ================= GET PRODUCTS BY CATEGORY =================

// export const getCategory = async (
//   category: string
// ): Promise<IProduct[]> => {
//   try {
//     const response = await fetch(
//       `https://openapi.programming-hero.com/api/bazardor/products?category=${category}`,
//       {
//         next: {
//           revalidate: 3600,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch category products");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching category products:", error);
//     return [];
//   }
// };

import { ICategory, IProduct } from "@/types/products";

const API_URL =
  "https://openapi.programming-hero.com/api/bazardor";

// GET ALL CATEGORIES
export const getCategories = async (): Promise<ICategory[]> => {
  const response = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch categories: ${response.status}`
    );
  }

  const result = await response.json();
  const categories = result.data ?? result;

  if (!Array.isArray(categories)) {
    throw new Error("Invalid categories API response");
  }

  return categories;
};

// GET PRODUCTS BY CATEGORY
export const getCategory = async (
  category: string
): Promise<IProduct[]> => {
  const response = await fetch(
    `${API_URL}/products?category=${encodeURIComponent(category)}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch category products: ${response.status}`
    );
  }

  const result = await response.json();
  const products = result.data ?? result;

  if (!Array.isArray(products)) {
    throw new Error("Invalid category products API response");
  }

  return products;
};