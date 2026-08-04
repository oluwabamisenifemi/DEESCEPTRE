import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/articles/published")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/45">
          Dee Scepter Journal
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Blog & Articles
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
          Insights, project updates, development thinking, and engineering-led
          real estate commentary.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d]"
            >
              <div className="h-64 overflow-hidden bg-[#111]">
                {article.coverImage ? (
                  <img
                    src={`http://localhost:5001${article.coverImage}`}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white/30">
                    No cover image
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-sm text-white/40">
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-sm font-medium text-white">
                  Read more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}