"use client";

import { useState } from "react";
import { IProduct } from "@/types/products";
import ProductCard from "./ProductCard";
import { bnNumber } from "@/utils/number";

interface ProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.today - b.today;

      case "price-high":
        return b.today - a.today;

      case "default":
      default:
        return 0;
    }
  });

  return (
    <>
      {/* ================= HEADER ================= */}
      <div
        id="products"
        className="scroll-mt-30 mb-5 mt-5"
      >
        <h2 className="text-[26px] font-bold leading-8 text-gray-900 sm:text-[28px]">
          সব পণ্য
        </h2>
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Product count */}
          <p className="text-[13px] text-gray-600">
            মোট {bnNumber(products.length)}টি পণ্য দেখানো হচ্ছে
          </p>
          {/* Sort */}
          <div className="flex items-center gap-2">
            <label
              htmlFor="sort"
              className="text-[13px] text-gray-600"
            >
              সাজান
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-8 rounded-lg border border-gray-300 bg-white px-3 text-[12px] text-gray-700 outline-none transition focus:border-green-600"
            >
              <option value="default">ডিফল্ট</option>
              <option value="price-low">দাম: কম থেকে বেশি</option>
              <option value="price-high">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;