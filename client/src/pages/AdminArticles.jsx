import { useEffect, useState } from "react";

const initialForm = {
  title: "",
  excerpt: "",
  content: "",
  author: "",
  category: "",
  status: "draft",
  mediumUrl: "",
  seoTitle: "",
  seoDescription: "",
  coverImage: null,
};

export default function AdminArticles() {
  const [form, setForm] = useState(initialForm);
  const [articles, setArticles] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const loadArticles = () => {
    fetch("http://localhost:5001/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "coverImage") {
      setForm((prev) => ({
        ...prev,
        coverImage: files[0],
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("author", form.author);
      formData.append("category", form.category);
      formData.append("status", form.status);
      formData.append("mediumUrl", form.mediumUrl);
      formData.append("seoTitle", form.seoTitle);
      formData.append("seoDescription", form.seoDescription);

      if (form.coverImage) {
        formData.append("coverImage", form.coverImage);
      }

      const response = await fetch("http://localhost:5001/api/articles", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create article");
      }

      setForm(initialForm);
      loadArticles();
      alert("Article saved successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to create article");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this article?");
    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:5001/api/articles/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete article");
      }

      loadArticles();
    } catch (error) {
      console.log(error);
      alert("Failed to delete article");
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Blog & Articles Admin
        </h1>
        <p className="mt-4 text-white/60">
          Publish to your site first, then add the Medium link after reposting there.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Create article</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-white/65">Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">Content</label>
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  required
                  rows="10"
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/65">Author</label>
                  <input
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/65">Status</label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65">Cover Image</label>
                  <input
                    type="file"
                    name="coverImage"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Medium URL (optional)
                </label>
                <input
                  type="url"
                  name="mediumUrl"
                  value={form.mediumUrl}
                  onChange={handleChange}
                  placeholder="https://medium.com/..."
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  SEO Title
                </label>
                <input
                  type="text"
                  name="seoTitle"
                  value={form.seoTitle}
                  onChange={handleChange}
                  placeholder="Leave empty to use article title"
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/65">
                  SEO Description
                </label>
                <textarea
                  name="seoDescription"
                  value={form.seoDescription}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Leave empty to use excerpt"
                  className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-3 text-white outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Saving..." : "Save Article"}
              </button>
            </form>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-[#0d0d0d] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Existing articles</h2>

            <div className="mt-8 space-y-4">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="rounded-[24px] border border-white/10 bg-[#141414] p-5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                        {article.status}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/55">
                        {article.excerpt}
                      </p>
                      {article.mediumUrl ? (
                        <a
                          href={article.mediumUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-block text-sm text-white/70 underline"
                        >
                          Medium link
                        </a>
                      ) : null}
                    </div>

                    <button
                      onClick={() => handleDelete(article.id)}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}

              {!articles.length && <p className="text-white/45">No articles yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}