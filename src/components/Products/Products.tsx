; import { getProducts } from "@/api/products";
import { IProduct } from "@/types/products";
import ProductCard from "./ProductCard";
import { bnNumber } from "@/utils/number";


const Products = async () => {
  const products: IProduct[] = await getProducts();
  const increasedProducts = products.filter((product) => product.today > product.yesterday);
  const decreasedProducts = products.filter((product) => product.today < product.yesterday);
  return (
    <section className="bg-[#f4f7f3] px-3 py-4 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1164px]">
        {/* Title */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-[15px] text-red-600">▲</span>

          <h2 className="text-[18px] font-bold text-gray-900 sm:text-[19px]">
            আজ দাম বেড়েছে
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          {increasedProducts.map((product) =>
            <ProductCard key={product.id} product={product} />
          )}
        </div>

        {/* Title */}
        <div className="mb-4 mt-5 flex items-center gap-2">
          <span className="text-[15px] text-green-600">▼</span>

          <h2 className="text-[18px] font-bold text-gray-900 sm:text-[19px]">
            আজ দাম কমেছে
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          {decreasedProducts.map((product) =>
            <ProductCard key={product.id} product={product} />
          )}
        </div>

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
                // value={sort}
                // onChange={(e) => setSort(e.target.value)}
                className="h-8 rounded-lg border border-gray-300 bg-white px-3 text-[12px] text-gray-700 outline-none transition focus:border-green-600"
              >
                <option value="featured">ফিচার্ড</option>
                <option value="price-low">কম দাম</option>
                <option value="price-high">বেশি দাম</option>
                <option value="change-high">বেশি পরিবর্তন</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          {products.map((product) =>
            <ProductCard key={product.id} product={product} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;