import Link from 'next/link';
import { getProducts } from '../service/products';
import MeawArticle from '@/components/MeawArticle';
import Image from 'next/image';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes' />
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
