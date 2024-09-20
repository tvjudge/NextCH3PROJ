import Link from 'next/link';
import Header from '../../components/header';

export default function About() {
    console.log('executing about file...')
  return (
    <>
    <Header />
    <main>
      <h1>About Us</h1>
      <p>🔥 We are  hot Company 🔥</p>
      <p><Link href="/">Home</Link></p>
    </main>
    </>
  );
}
