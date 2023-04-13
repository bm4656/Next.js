import { Inter } from 'next/font/google';
import styles from './page.module.css';
import os from 'os'; //노드 APIs

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  console.log('안녕!');
  console.log(os.hostname());

  // const [name, setName] = useState(''); 💩오류
  return <h1>홈페이지다아!</h1>;
}
