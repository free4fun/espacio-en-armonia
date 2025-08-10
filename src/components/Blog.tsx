import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/PostType';
import postsData from '../data/posts.json'; // Asegúrate de tener este archivo con el JSON cargado

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    setPosts(postsData);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setPostsPerPage(window.innerWidth < 768 ? 3 : 4);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const allTags = Array.from(new Set(postsData.flatMap(p => p.tags)));
  const filteredPosts = selectedTag ? posts.filter(post => post.tags.includes(selectedTag)) : posts;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="section">
      <h2 className="section-heading">Blog</h2>
      <div className="m-6 flex flex-wrap gap-2 justify-center hidden md:flex">
        <span 
          className={`bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-all duration-200 hover:bg-green-200 
            ${selectedTag === '' ? 'opacity-80 ring-2 ring-green-500' : ''}`}
          onClick={() => {setSelectedTag('');setCurrentPage(1);}}>todos
        </span>
        {allTags.map((tag, i) => (
          <span key={i}
            className={`bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-all duration-200 hover:bg-green-200
              ${selectedTag === tag ? 'opacity-80 ring-2 ring-green-500' : ''}`} 
            onClick={() => {setSelectedTag(tag);setCurrentPage(1);}}>#{tag}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {currentPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block h-full">
            <article className="flex flex-col h-full rounded-2xl shadow-md bg-white transition hover:shadow-lg hover:bg-[#a8e06e22]">
              <div className="overflow-hidden rounded-t-2xl">
                <img src={post.image || '/images/blog/default.webp'} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" loading="lazy"/>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#4b4b3e] mb-1">{post.title}</h3>
                <p className="text-xs text-gray-500 mb-2">Por {post.author} — {post.date}</p>
                <p className="text-sm text-[#333] mb-4 line-clamp-3">{post.content.slice(0, 150)}...</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)} className={`px-3 py-1 rounded-full border ${currentPage === i + 1 ? 'bg-[#92bfa0] text-white' : 'bg-white text-[#333]'}`}>{i + 1}</button>
        ))}
      </div>
    </section>
  );
}

export default Blog;