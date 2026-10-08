import AllProducts from "@/components/Homepage/AllProducts";
import Banner from "@/components/Homepage/Banner";
import CategoryPage from "@/components/Homepage/CategoryPage";
import PriceChanges from "@/components/Homepage/PriceChanges";
import ProductDetails from "@/components/Homepage/ProductDetails";
import ProfilePage from "@/components/Homepage/ProfilePage";

export default function Home() {
  return (
    <>
    <Banner/>
    <PriceChanges/>
    <AllProducts/>
    <ProductDetails/>
    <ProfilePage/>
    <CategoryPage/>
    </>
  );
}
