import Link from 'next/link';

const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
