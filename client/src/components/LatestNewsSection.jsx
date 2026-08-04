import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LatestNewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/articles/published")
      .then((res) => res.json())
      .then((data) => setArticles(data.slice(0, 4)))
      .catch((err) => console.log(err));
  }, []);

  if (!articles.length) {
    return null;
  }

  const latest = articles[0];
  const others = articles.slice(1);

  return (
    <section className="bg-black px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">
              Latest News & Updates
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Blog & Articles
            </h2>
          </div>

          <Link
            to="/articles"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View all articles
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Link
            to={`/articles/${latest.slug}`}
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d0d]"
          >
            <div className="h-[360px] overflow-hidden bg-[#111]">
              {latest.coverImage ? (
                <img
                  src={`http://localhost:5001${latest.coverImage}`}
                  alt={latest.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/30">
                  No cover image
                </div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <p className="text-sm text-white/45">
                {new Date(latest.createdAt).toLocaleDateString()}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                {latest.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                {latest.excerpt}
              </p>
              <span className="mt-6 inline-block text-sm font-medium text-white">
                Read more →
              </span>
            </div>
          </Link>

          <div className="space-y-6">
            {others.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group block rounded-[28px] border border-white/10 bg-[#0d0d0d] p-5 transition hover:bg-white/[0.03]"
              >
                <p className="text-sm text-white/40">
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-white">
                  Read article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}