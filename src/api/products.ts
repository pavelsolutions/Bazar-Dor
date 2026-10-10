// import { IProduct } from "@/types/products";

// export const getProducts = async (): Promise<IProduct[]> => {
//   try {
//     const response = await fetch(
//       "https://openapi.programming-hero.com/api/bazardor/products",
//       {
//         next: {
//           revalidate: 3600,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

// export const getProduct = async (
//   productId: string
// ): Promise<IProduct | null> => {
//   try {
//     const response = await fetch(
//       `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
//       {
//         next: {
//           revalidate: 3600,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch product");
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };


// ===============================
import { IProduct } from "@/types/products";

const API_URL =
  "https://openapi.programming-hero.com/api/bazardor/products";

// Get all products
export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status}`
      );
    }

    const result = await response.json();

    // Handle API response
    const products = result.data ?? result;

    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Get a single product
export const getProduct = async (
  productId: string
): Promise<IProduct | null> => {
  try {
    const url = `${API_URL}/${encodeURIComponent(productId)}`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
      },
    });

    // Product not found
    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product: ${response.status}`
      );
    }

    const result = await response.json();

    // Handle API response
    const product = result.data ?? result;

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};