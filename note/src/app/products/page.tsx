import Link from 'next/link';
import { getProducts } from '../service/products';
import MeawArticle from '@/components/MeawArticle';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products Page!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeawArticle />
    </div>
  );
}
