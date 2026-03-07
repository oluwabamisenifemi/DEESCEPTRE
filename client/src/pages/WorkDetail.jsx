import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_BASE = "http://localhost:5000";

export default function WorkDetail() {
  const { id } = useParams();
  const [work, setWork] = useState(null);

  useEffect(() => {
    fetch(`/api/works/${id}`)
      .then((r) => r.json())
      .then((d) => setWork(d?.work || null))
      .catch(() => setWork(null));
  }, [id]);

  const cover = work?.coverImageUrl ? `${API_BASE}${work.coverImageUrl}` : "";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <a href="/#featured-works" className="text-sm text-black/60 hover:text-black">
  ← Back
</a>

        <div className="mt-6 overflow-hidden rounded-2xl bg-black/5">
          {cover ? (
            <img src={cover} alt={work?.title || "Work"} className="w-full h-[520px] object-cover" />
          ) : (
            <div className="w-full h-[520px] grid place-items-center text-black/50">
              No image
            </div>
          )}
        </div>

        <h1 className="mt-8 font-[Montserrat] text-5xl font-semibold tracking-tight text-black">
          {work?.title || "Work"}
        </h1>

        <div className="mt-4 flex gap-3 flex-wrap">
          {work?.category ? (
            <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70">
              {work.category}
            </span>
          ) : null}
          {work?.location ? (
            <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70">
              {work.location}
            </span>
          ) : null}
        </div>

        {work?.overview ? (
          <p className="mt-8 text-xl text-black/80 max-w-3xl leading-relaxed font-[Montserrat]">
            {work.overview}
          </p>
        ) : null}

        {work?.description ? (
          <p className="mt-6 text-black/60 max-w-3xl leading-relaxed font-[Montserrat]">
            {work.description}
          </p>
        ) : null}

        {Array.isArray(work?.gallery) && work.gallery.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {work.gallery.map((img) => (
              <img
                key={img}
                src={`${API_BASE}${img}`}
                alt="Gallery"
                className="w-full h-[340px] object-cover rounded-2xl"
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}