import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:5001";

export default function PropertiesPage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/api/properties")
      .then((r) => r.json())
      .then((d) => {
        setProperties(Array.isArray(d?.properties) ? d.properties : []);
      })
      .catch(() => {
        setProperties([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* top filter style bar */}
      <div className="sticky top-0 z-40 border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-3 overflow-x-auto">
          {["Type", "Price", "Bedrooms", "Amenities", "Status", "More filters"].map((item) => (
            <button
              key={item}
              className="shrink-0 rounded-full border border-black/15 px-4 py-2 text-sm text-black/80 hover:border-black/30 hover:bg-black/[0.03] transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm text-black/55">Property listings</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            Explore available properties
          </h1>
        </div>

        {properties.length === 0 ? (
          <div className="rounded-2xl border border-black/10 p-10 text-black/50">
            No properties yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {properties.map((property) => {
              const cover = property.coverImageUrl
                ? `${API_BASE}${property.coverImageUrl}`
                : "";

              return (
                <Link
                  key={property.id}
                  to={`/properties/${property.id}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-3xl bg-black/[0.04]">
                    {cover ? (
                      <img
                        src={cover}
                        alt={property.name}
                        className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="h-[280px] grid place-items-center text-black/40">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    {property.propertyText ? (
                      <p className="text-sm text-black/55">{property.propertyText}</p>
                    ) : null}

                    <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                      {property.name}
                    </h2>

                    <p className="mt-1 text-black/60">
                      {property.location || "No location"}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-lg font-semibold">
                        {property.value || "Price on request"}
                      </span>

                      <span className="text-sm text-black/50">View details</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}