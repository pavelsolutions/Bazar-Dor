import { getCategory } from "@/api/category";
import ProductCard from "@/components/Products/ProductCard";
import { bnNumber } from "@/utils/number";
import Link from "next/link";

interface ICategoryProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryDetails = async ({ params }: ICategoryProps) => {
  const { categoryId } = await params;

  const categories = await getCategory(categoryId);

  return (
    <main className="min-h-screen bg-[#f4f7f3] px-4 py-5 sm:px-5 sm:py-6">
      <div className="mx-auto max-w-[1164px]">

        {/* ================= CATEGORY HEADER ================= */}
        <section className="rounded-[18px] border border-gray-200 bg-white px-5 py-5 sm:px-7">
          <div className="flex items-center gap-4">

            {/* Category Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f1] text-[27px]">
              {categories[0]?.categoryIcon}
            </div>

            {/* Category Info */}
            <div>
              <h1 className="text-[23px] font-bold leading-7 text-gray-900">
                {categories[0]?.categoryNameBn}
              </h1>

              <p className="mt-0.5 text-[12px] text-gray-500">
                {bnNumber(categories.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>

          </div>
        </section>

        {/* ================= SORT BAR ================= */}
        <section className="mt-5">
          <div className="flex items-center justify-between">

            <p className="text-[12px] text-gray-600">
              মোট {bnNumber(categories.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="flex items-center gap-2">
              <label
                htmlFor="sort"
                className="text-[12px] text-gray-500"
              >
                সাজান
              </label>

              <select
                id="sort"
                className="h-8 rounded-lg border border-gray-300 bg-white px-3 text-[11px] text-gray-700 outline-none focus:border-green-600"
              >
                <option>ফিচার্ড</option>
                <option>কম দাম</option>
                <option>বেশি দাম</option>
                <option>পরিবর্তন</option>
              </select>
            </div>

          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="mt-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              return (
                <ProductCard key={category.id} product={category} />
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
};

export default CategoryDetails;