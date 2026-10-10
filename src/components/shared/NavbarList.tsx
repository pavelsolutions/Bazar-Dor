"use client";

import { ICategory } from "@/types/products";
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavbarListProps = {
  categories: ICategory[];
};

const NavbarList = ({
  categories,
}: NavbarListProps) => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1164px]">
        <div className="scrollbar-hide flex items-center justify-start gap-3 overflow-x-auto px-4 py-2.5 sm:gap-4">
          {categories.map((category) => {
            const isActive =
              pathname === `/category/${category.slug}`;

            return (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors sm:text-[14px] ${
                  isActive
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.nameBn}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavbarList;