import { getProduct, getProducts } from '@/app/service/products';
import GoProductsButton from '@/components/GoProductsButton';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
  };
}

export default async function ProductsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect('/products');
    // notFound();
  }
  //서버 파일에 있는 데이터 중 헤딩 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  //모든 제품이 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id,
  }));
}
