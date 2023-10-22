import { Product } from "@/types";
import NoResults from "./ui/NoResults";
import ProductCard from "./ui/ProductCard";
import { getSizes } from "@/actions/get-sizes";
import { getColors } from "@/actions/get-colors";

interface Props {
  title: string;
  items: Product[];
}




const ProductList = async ({ title, items }: Props) => {
  const sizes = await getSizes();

  const colors = await getColors();
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} colors={colors} sizes={sizes} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
