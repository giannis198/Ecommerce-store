import { getCategory } from "@/actions/get-category";

import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";

interface Props {
  params: {
    categoryId: string;
  };
}

const CategoryPage = async ({ params }: Props) => {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
