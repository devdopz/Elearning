import ProductCard from "../Components/ProductCard";
import DashboardNav from "../Components/dashboard/DashboardNav";

export default function Trending() {
  return (
    <>
      <DashboardNav />

      <main className="max-w-7xl mx-auto py-20">
        <ProductCard />
      </main>
    </>
  );
}
