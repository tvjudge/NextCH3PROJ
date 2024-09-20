import Link from 'next/link';
import Header from '../components/header.js';

export default function Home() {
    console.log('executing file...')
  return (
    <main>
     <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About us</Link></p>
      <p><Link href="/blog">Blogs</Link></p>
    </main>
  );
}
