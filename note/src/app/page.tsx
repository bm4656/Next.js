import { Inter } from 'next/font/google';
import styles from './page.module.css';
import os from 'os'; //노드 APIs
import Counter from '@/components/Counter';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다아! ver4</h1>
      <Image
        src={'https://images.unsplash.com/photo-1441986300917-64674bd600d8'}
        alt='homeImage'
        width={400}
        height={400}
      />
      <Counter />
    </>
  );
}
