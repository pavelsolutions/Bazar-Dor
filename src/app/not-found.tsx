import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-68px)] items-center justify-center bg-[#f4f7f3] px-4 py-10">
      <div className="w-full max-w-[500px] text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[20px] bg-white text-[40px] shadow-sm">
          🛒
        </div>

        {/* 404 */}
        <h1 className="mt-6 text-[64px] font-bold leading-none text-green-700">
          ৪০৪
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-[24px] font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[380px] text-[13px] leading-6 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি হয়তো মুছে ফেলা হয়েছে
          অথবা ঠিকানা পরিবর্তন করা হয়েছে।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-green-700 px-5 text-[13px] font-medium text-white transition hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;