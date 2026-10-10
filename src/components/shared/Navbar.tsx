import { getCategories } from "@/api/category";
import NavbarList from "./NavbarList";

const CategoryNavbar = async () => {
  const categories = await getCategories();

  return <NavbarList categories={categories} />;
};

export default CategoryNavbar;