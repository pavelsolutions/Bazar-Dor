import { getCategory } from "@/api/category";

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
      <div className="mx-auto max-w-[1130px]">

        {/* ================= CATEGORY HEADER ================= */}
        <section className="rounded-[18px] border border-gray-200 bg-white px-5 py-5 sm:px-7">
          <div className="flex items-center gap-4">
            
            {/* Category Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f1] text-[27px]">
              🌶️
            </div>

            {/* Category Info */}
            <div>
              <h1 className="text-[23px] font-bold leading-7 text-gray-900">
                {categories[0].nameBn}
              </h1>

              <p className="mt-0.5 text-[12px] text-gray-500">
                {categories.length} টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        {/* ================= SORT BAR ================= */}
        <section className="mt-5">
          <div className="flex items-center justify-between">
            
            <p className="text-[12px] text-gray-600">
              মোট {categories.length} টি পণ্য দেখানো হচ্ছে
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

            {/* Product 1 */}
            <div className="rounded-[16px] border border-gray-200 bg-white p-3.5 transition hover:border-green-400 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5f1] text-[21px]">
                  🫚
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold leading-5 text-gray-900">
                    আদা
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    প্রতি কেজি
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="mt-0.5 text-[17px] font-semibold leading-5 text-gray-900">
                    ৮৫{" "}
                    <span className="text-[11px] font-normal">
                      টাকা
                    </span>
                  </p>
                </div>

                <span className="rounded-full bg-red-50 px-2.5 py-1 text-[9px] font-medium text-red-600">
                  ▲ ৩.০%
                </span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="rounded-[16px] border border-gray-200 bg-white p-3.5 transition hover:border-green-400 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5f1] text-[21px]">
                  🧄
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold leading-5 text-gray-900">
                    রসুন
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    প্রতি কেজি
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="mt-0.5 text-[17px] font-semibold leading-5 text-gray-900">
                    ১২৫{" "}
                    <span className="text-[11px] font-normal">
                      টাকা
                    </span>
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-medium text-green-600">
                  ▼ ৪.৮%
                </span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="rounded-[16px] border border-gray-200 bg-white p-3.5 transition hover:border-green-400 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5f1] text-[21px]">
                  🌶️
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold leading-5 text-gray-900">
                    মরিচ গুঁড়া
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    প্রতি কেজি
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="mt-0.5 text-[17px] font-semibold leading-5 text-gray-900">
                    ২৪৫{" "}
                    <span className="text-[11px] font-normal">
                      টাকা
                    </span>
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-medium text-green-600">
                  ▼ ২.০%
                </span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="rounded-[16px] border border-gray-200 bg-white p-3.5 transition hover:border-green-400 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5f1] text-[21px]">
                  🌿
                </div>

                <div>
                  <h2 className="text-[15px] font-semibold leading-5 text-gray-900">
                    ধনেপাতা গুঁড়া
                  </h2>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    প্রতি কেজি
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="mt-0.5 text-[17px] font-semibold leading-5 text-gray-900">
                    ২৬৫{" "}
                    <span className="text-[11px] font-normal">
                      টাকা
                    </span>
                  </p>
                </div>

                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[9px] font-medium text-gray-600">
                  — ০.০%
                </span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
};

export default CategoryDetails;