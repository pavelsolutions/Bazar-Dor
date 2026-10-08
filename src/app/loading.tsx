const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f4f7f3] px-3 py-4 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1164px]">
        {/* Hero Skeleton */}
        <div className="mb-6 overflow-hidden rounded-[18px] bg-white p-5">
          <div className="h-7 w-2/3 animate-pulse rounded-lg bg-gray-200" />
          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          <div className="mt-5 h-10 w-36 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Section Title */}
        <div className="mb-5">
          <div className="h-8 w-32 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Sort */}
        <div className="mb-4 flex items-center justify-between">
          <div className="h-4 w-36 animate-pulse rounded bg-gray-200" />

          <div className="h-8 w-28 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Product Skeletons */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[16px] border border-gray-200 bg-white"
            >
              {/* Image */}
              <div className="h-48 w-full animate-pulse bg-gray-200" />

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />

                {/* Product name */}
                <div className="mt-3 h-5 w-32 animate-pulse rounded bg-gray-200" />

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-12 animate-pulse rounded bg-gray-100" />
                  </div>

                  <div className="h-7 w-16 animate-pulse rounded-full bg-gray-100" />
                </div>

                {/* Bottom */}
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <div className="h-3 w-28 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;