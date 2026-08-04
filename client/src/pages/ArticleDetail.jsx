import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [moreArticles, setMoreArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/articles/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);

        if (data?.seoTitle) {
          document.title = data.seoTitle;
        } else {
          document.title = data.title;
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            data.seoDescription || data.excerpt || ""
          );
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    fetch("http://localhost:5001/api/articles/published")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.slug !== slug).slice(0, 3);
        setMoreArticles(filtered);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black px-6 py-20 text-white">
        Loading article...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:px-10">
        <Link
          to="/articles"
          className="inline-block text-sm text-white/55 transition hover:text-white"
        >
          ← Back to all articles
        </Link>

        <p className="mt-8 text-sm text-white/40">
          {new Date(article.createdAt).toLocaleDateString()}
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {article.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-white/60">
          {article.excerpt}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {article.mediumUrl ? (
            <a
              href={article.mediumUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Read on Medium
            </a>
          ) : null}
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#111]">
          {article.coverImage ? (
            <img
              src={`http://localhost:5001${article.coverImage}`}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-[400px] items-center justify-center text-white/30">
              No cover image
            </div>
          )}
        </div>

        <article className="mt-12 max-w-none">
          {article.content.split("\n").map((paragraph, index) =>
            paragraph.trim() ? (
              <p
                key={index}
                className="mb-6 text-base leading-8 text-white/75 md:text-lg"
              >
                {paragraph}
              </p>
            ) : null
          )}
        </article>
      </div>

      {moreArticles.length > 0 && (
        <div className="border-t border-white/10 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              More from the blog
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {moreArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`/articles/${item.slug}`}
                  className="rounded-[28px] border border-white/10 bg-[#0d0d0d] p-5 transition hover:bg-white/[0.03]"
                >
                  <p className="text-sm text-white/40">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}