import { useParams, Link } from "react-router-dom";
import postsData from "../data/posts.json";
import { useEffect, useState } from "react";
import { BlogPost } from '../types/PostType';

function Post() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const allPosts = postsData as BlogPost[];
    const found = allPosts.find((p) => p.slug === slug);
    setPost(found || null);

    if (found) {
      const related = allPosts
        .filter((p) => p.slug !== found.slug && p.tags.some(tag => found.tags.includes(tag)))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [slug]);

  if (!post) {
    return (
      <section className="section text-center">
        <h2 className="text-2xl font-bold mb-4">Artículo no encontrado</h2>
        <Link to="/blog" className="btn-primary">Volver al blog</Link>
      </section>
    );
  }

  return (
    <section className="section max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        Por {post.author} · {new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag, index) => (<span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">#{tag}</span>))}
      </div>
      <img src={post.image || '/images/blog/default.webp'} alt={post.title} className="rounded-xl w-full mb-6 shadow" />

      <article className="prose prose-neutral max-w-none">{post.content.split("\n\n").map((para, index) => (<p key={index}>{para}</p>))}</article>

      <div className="mt-10"><Link to="/blog" className="btn-primary">← Volver al blog</Link></div>

      {relatedPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">También puede interesarte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link key={rel.slug} to={`/tecnicas/${rel.slug}`} className="card hover:bg-green-50 transition-colors p-4 rounded-xl shadow">
                <img src={rel.image || '/images/blog/default.webp'} alt={rel.title} className="rounded-lg mb-3 w-full h-40 object-cover" />
                <h3 className="text-lg font-semibold">{rel.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{rel.content.slice(0, 150)}...</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Post;
