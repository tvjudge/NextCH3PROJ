import Link from 'next/link';
            
export default function BlogPage() {
    
return (
    <main>
    <h1>The Blogs</h1>
    <p>🔥 Here are the blogs... 🔥</p>
    <hr />
    <p><Link href="/blog/post-1">Post 1</Link></p>
    <p><Link href="/blog/post-2">Post 2</Link></p>
    <p><Link href="/blog/post-banana">Post Bana</Link></p>

    <hr />
    <p><Link href="/">Home</Link></p>
    </main>
);
}