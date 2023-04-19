import Link from 'next/link';
import { getProducts } from '../service/products';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    // next: { revalidate: 3 },
    cache: 'no-store',
  });
  const data = await res.json();
  const factText = data.data[0];
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
      <article>{factText}</article>
    </div>
  );
}
