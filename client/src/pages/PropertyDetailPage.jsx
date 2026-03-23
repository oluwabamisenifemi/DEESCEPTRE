import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE = "http://localhost:5001";

export default function PropertyDetailPage() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setProperty(d?.property || null);
      })
      .catch(() => {
        setProperty(null);
      });
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-white text-black">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <Link to="/properties" className="text-sm text-black/60 hover:text-black">
            ← Back to listings
          </Link>
          <div className="mt-10 text-black/50">Loading property...</div>
        </div>
      </div>
    );
  }

  const cover = property.coverImageUrl ? `${API_BASE}${property.coverImageUrl}` : "";
  const gallery = Array.isArray(property.gallery) ? property.gallery : [];
  const amenities = Array.isArray(property.amenities) ? property.amenities : [];
  const variables = Array.isArray(property.variables) ? property.variables : [];

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <Link to="/properties" className="text-sm text-black/60 hover:text-black">
          ← Back to listings
        </Link>

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-10">
          {/* left */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-black/[0.04]">
              {cover ? (
                <img
                  src={cover}
                  alt={property.name}
                  className="h-[420px] md:h-[540px] w-full object-cover"
                />
              ) : (
                <div className="h-[420px] md:h-[540px] grid place-items-center text-black/40">
                  No image
                </div>
              )}
            </div>

            {gallery.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {gallery.map((img, i) => (
                  <div key={`${img}-${i}`} className="overflow-hidden rounded-3xl bg-black/[0.04]">
                    <img
                      src={`${API_BASE}${img}`}
                      alt={`Gallery ${i + 1}`}
                      className="h-[260px] w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* right */}
          <div>
            {property.propertyText ? (
              <p className="text-sm text-black/55">{property.propertyText}</p>
            ) : null}

            <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
              {property.name}
            </h1>

            <p className="mt-3 text-lg text-black/65">{property.location || "No location"}</p>

            <div className="mt-6 text-2xl font-semibold">
              {property.value || "Price on request"}
            </div>

            {variables.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {variables.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-black/10 p-4"
                  >
                    <p className="text-sm text-black/50">{item.label}</p>
                    <p className="mt-2 text-lg font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {amenities.length > 0 ? (
              <div className="mt-10">
                <h2 className="text-xl font-semibold">Amenities</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {amenities.map((item, i) => (
                    <span
                      key={`${item}-${i}`}
                      className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {property.description ? (
              <div className="mt-10">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-4 leading-8 text-black/70">
                  {property.description}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}