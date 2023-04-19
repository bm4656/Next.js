import { getProduct, getProducts } from '@/app/service/products';
import { notFound } from 'next/navigation';

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

export default async function PantsPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  //서버 파일에 있는 데이터 중 헤딩 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{product.name} 설명 페이지</h1>;
}

export async function generateStaticParams() {
  //모든 제품이 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
  const products = await getProducts();
  return products.map(product => ({
    slug: product.id,
  }));
}
