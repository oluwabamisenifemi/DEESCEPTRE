import { useEffect, useMemo, useState } from "react";

const API_BASE = "http://localhost:5000";

export default function SecretAdmin() {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HERO image state (existing)
  const [currentUrl, setCurrentUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  // SECTION image state (existing)
  const [currentSectionUrl, setCurrentSectionUrl] = useState("");
  const [previewSectionUrl, setPreviewSectionUrl] = useState("");

  // FEATURED WORKS (NEW)
  const [works, setWorks] = useState([]);
  const [loadingWorks, setLoadingWorks] = useState(false);
  const [workOverview, setWorkOverview] = useState("");
  const [workDescription, setWorkDescription] = useState("");

  const [workTitle, setWorkTitle] = useState("");
  const [workCategory, setWorkCategory] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [workFeatured, setWorkFeatured] = useState(true);

  const [coverPreview, setCoverPreview] = useState("");
  const [coverUrl, setCoverUrl] = useState(""); // after upload

  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [galleryUrls, setGalleryUrls] = useState([]); // after upload

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const [loggingIn, setLoggingIn] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [creatingWork, setCreatingWork] = useState(false);

  const loggedIn = !!token;

  const card =
    "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]";
  const subtleBorder = "border border-white/10";
  const input =
    "w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 outline-none text-white placeholder:text-white/40 focus:border-white/20 focus:ring-2 focus:ring-white/10";

  const buttonPrimary =
    "rounded-xl bg-white text-zinc-900 font-semibold px-4 py-3 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition";
  const buttonGhost =
    "rounded-xl border border-white/15 bg-white/[0.02] text-white/80 px-4 py-2 hover:bg-white/[0.06] transition";

  const fileInput =
    "block w-full text-sm text-white/70 " +
    "file:mr-4 file:rounded-lg file:border-0 " +
    "file:bg-white file:px-4 file:py-2 file:text-zinc-900 file:font-semibold " +
    "hover:file:bg-white/90";

  const badge = useMemo(() => {
    if (error) {
      return (
        <div className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      );
    }
    if (status) {
      return (
        <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          {status}
        </div>
      );
    }
    return null;
  }, [error, status]);

  // Load current site settings + works
  useEffect(() => {
    fetch("/api/site")
      .then((r) => r.json())
      .then((d) => {
        const hero = d?.site?.heroImageUrl || "";
        const section = d?.site?.sectionImageUrl || "";

        if (hero) setCurrentUrl(`${API_BASE}${hero}`);
        if (section) setCurrentSectionUrl(`${API_BASE}${section}`);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    refreshWorks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function refreshWorks() {
    setLoadingWorks(true);
    try {
      const r = await fetch("/api/works");
      const d = await r.json().catch(() => ({}));
      setWorks(Array.isArray(d?.works) ? d.works : []);
    } catch {
      setWorks([]);
    } finally {
      setLoadingWorks(false);
    }
  }

  async function login(e) {
    e.preventDefault();
    setError("");
    setStatus("");

    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoggingIn(true);
    setStatus("Logging in...");

    try {
      const r = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const d = await r.json().catch(() => ({}));

      if (!r.ok) {
        setStatus("");
        setError(d?.error || `Login failed (HTTP ${r.status}).`);
        return;
      }

      localStorage.setItem("admin_token", d.token);
      setToken(d.token);
      setStatus("Logged in ✅");
    } catch {
      setStatus("");
      setError("Could not reach the server. Make sure the backend is running.");
    } finally {
      setLoggingIn(false);
    }
  }

  function logout() {
    localStorage.removeItem("admin_token");
    setToken("");
    setEmail("");
    setPassword("");
    setPreviewUrl("");
    setPreviewSectionUrl("");
    setCoverPreview("");
    setCoverUrl("");
    setGalleryPreviews([]);
    setGalleryUrls([]);
    setStatus("Logged out.");
    setError("");
  }

  async function uploadSingleImage(file) {
    const form = new FormData();
    form.append("image", file);

    const up = await fetch("/api/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });

    const upData = await up.json().catch(() => ({}));
    if (!up.ok || !upData.url) {
      throw new Error(upData?.error || `Upload failed (HTTP ${up.status}).`);
    }
    return upData.url; // like "/uploads/....jpg"
  }

  // HERO upload
  async function onPickFile(file) {
    if (!file) return;
    setError("");
    setStatus("");

    if (!token) {
      setError("Please login first.");
      return;
    }

    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);

    setUploading(true);
    setStatus("Uploading image...");

    try {
      const url = await uploadSingleImage(file);

      setStatus("Saving selection...");
      const save = await fetch("/api/site", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ heroImageUrl: url }),
      });

      const saveData = await save.json().catch(() => ({}));
      if (!save.ok) {
        setStatus("");
        setError(saveData?.error || `Save failed (HTTP ${save.status}).`);
        return;
      }

      const newHero = saveData?.site?.heroImageUrl || url;
      setCurrentUrl(`${API_BASE}${newHero}`);
      setPreviewUrl("");
      setStatus("Updated ✅ Refresh the homepage to see it.");
    } catch (e) {
      setStatus("");
      setError(e?.message || "Something went wrong during upload.");
    } finally {
      setUploading(false);
      try {
        URL.revokeObjectURL(localPreview);
      } catch {}
    }
  }

  // SECTION upload
  async function onPickSectionFile(file) {
    if (!file) return;
    setError("");
    setStatus("");

    if (!token) {
      setError("Please login first.");
      return;
    }

    const localPreview = URL.createObjectURL(file);
    setPreviewSectionUrl(localPreview);

    setUploading(true);
    setStatus("Uploading image...");

    try {
      const url = await uploadSingleImage(file);

      setStatus("Saving selection...");
      const save = await fetch("/api/site", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sectionImageUrl: url }),
      });

      const saveData = await save.json().catch(() => ({}));
      if (!save.ok) {
        setStatus("");
        setError(saveData?.error || `Save failed (HTTP ${save.status}).`);
        return;
      }

      const newSection = saveData?.site?.sectionImageUrl || url;
      setCurrentSectionUrl(`${API_BASE}${newSection}`);
      setPreviewSectionUrl("");
      setStatus("Updated ✅ Refresh the homepage to see it.");
    } catch (e) {
      setStatus("");
      setError(e?.message || "Something went wrong during upload.");
    } finally {
      setUploading(false);
      try {
        URL.revokeObjectURL(localPreview);
      } catch {}
    }
  }

  // FEATURED WORKS: pick cover
  async function onPickCover(file) {
    if (!file) return;
    setError("");
    setStatus("");

    if (!token) return setError("Please login first.");

    const local = URL.createObjectURL(file);
    setCoverPreview(local);

    setUploading(true);
    setStatus("Uploading cover image...");

    try {
      const url = await uploadSingleImage(file);
      setCoverUrl(url);
      setStatus("Cover uploaded ✅");
    } catch (e) {
      setCoverPreview("");
      setCoverUrl("");
      setStatus("");
      setError(e?.message || "Cover upload failed.");
    } finally {
      setUploading(false);
      try {
        URL.revokeObjectURL(local);
      } catch {}
    }
  }

  // FEATURED WORKS: pick gallery (multiple)
  async function onPickGallery(files) {
    const arr = Array.from(files || []);
    if (!arr.length) return;

    setError("");
    setStatus("");

    if (!token) return setError("Please login first.");

    // previews
    const locals = arr.map((f) => URL.createObjectURL(f));
    setGalleryPreviews(locals);

    setUploading(true);
    setStatus("Uploading gallery images...");

    try {
      const urls = [];
      for (const f of arr) {
        // upload one by one (simple + reliable)
        // eslint-disable-next-line no-await-in-loop
        const u = await uploadSingleImage(f);
        urls.push(u);
      }
      setGalleryUrls(urls);
      setStatus("Gallery uploaded ✅");
    } catch (e) {
      setGalleryPreviews([]);
      setGalleryUrls([]);
      setStatus("");
      setError(e?.message || "Gallery upload failed.");
    } finally {
      setUploading(false);
      try {
        locals.forEach((u) => URL.revokeObjectURL(u));
      } catch {}
    }
  }

  async function createFeaturedWork() {
    setError("");
    setStatus("");

    if (!token) return setError("Please login first.");
    if (!workTitle.trim()) return setError("Title is required.");
    if (!coverUrl) return setError("Please upload a cover image first.");

    setCreatingWork(true);
    setStatus("Creating work...");

    try {
      const r = await fetch("/api/works", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: workTitle.trim(),
          category: workCategory.trim(),
          location: workLocation.trim(),
          overview: workOverview.trim(),
          description: workDescription.trim(),
          coverImageUrl: coverUrl,
          gallery: galleryUrls,
          isFeatured: !!workFeatured,
        }),
      });

      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setStatus("");
        setError(d?.error || `Create failed (HTTP ${r.status}).`);
        return;
      }

      setStatus("Work created ✅");
      setWorkTitle("");
      setWorkCategory("");
      setWorkLocation("");
      setWorkFeatured(true);
      setCoverPreview("");
      setCoverUrl("");
      setGalleryPreviews([]);
      setGalleryUrls([]);
      setWorkOverview("");
      setWorkDescription("");

      await refreshWorks();
    } catch {
      setStatus("");
      setError("Could not create work.");
    } finally {
      setCreatingWork(false);
    }
  }

  async function toggleFeatured(work) {
    setError("");
    setStatus("");

    if (!token) return setError("Please login first.");

    try {
      const r = await fetch(`/api/works/${work.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isFeatured: !work.isFeatured }),
      });

      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(d?.error || `Update failed (HTTP ${r.status}).`);
        return;
      }

      setStatus("Updated ✅");
      await refreshWorks();
    } catch {
      setError("Could not update work.");
    }
  }

  async function removeWork(work) {
    setError("");
    setStatus("");

    if (!token) return setError("Please login first.");

    try {
      const r = await fetch(`/api/works/${work.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(d?.error || `Delete failed (HTTP ${r.status}).`);
        return;
      }

      setStatus("Deleted ✅");
      await refreshWorks();
    } catch {
      setError("Could not delete work.");
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-24 right-0 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Admin</p>
            <h1 className="text-2xl font-semibold">Site Dashboard</h1>
            <p className="mt-1 text-white/60">
              Upload and update the homepage hero background image.
            </p>
          </div>

          {loggedIn ? (
            <button onClick={logout} className={buttonGhost}>
              Logout
            </button>
          ) : (
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60">
              Not logged in
            </span>
          )}
        </div>

        {/* Content */}
        {!loggedIn ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Login card */}
            <div className={`${card} p-6`}>
              <h2 className="text-lg font-semibold">Login</h2>
              <p className="mt-1 text-sm text-white/60">Enter your admin credentials to continue.</p>

              <form onSubmit={login} className="mt-6 space-y-4">
                <div>
                  <label className="text-xs text-white/60">Email</label>
                  <input
                    className={`${input} mt-2`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@email.com"
                    autoComplete="username"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Password</label>
                  <input
                    type="password"
                    className={`${input} mt-2`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />
                </div>

                <button disabled={loggingIn} className={`${buttonPrimary} w-full`}>
                  {loggingIn ? "Logging in..." : "Login"}
                </button>

                {badge}
              </form>
            </div>

            {/* Info card */}
            <div className={`${card} p-6`}>
              <h2 className="text-lg font-semibold">What you can change</h2>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-white/40" />
                  Homepage hero background image
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-white/40" />
                  Second section image
                </li>
                <li className="flex gap-3">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-white/40" />
                  Featured Works (add/delete/show on homepage)
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-white/60">
                Tip: keep images under 10MB for faster uploads.
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-6">
            {/* HERO IMAGE */}
            <div className={`${card} p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">Hero Image</h2>
                  <p className="mt-1 text-sm text-white/60">
                    Upload a new image and it will replace the homepage hero background.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-4`}>
                  <p className="text-xs text-white/60">Current</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    {currentUrl ? (
                      <img src={currentUrl} alt="Current hero" className="h-44 w-full object-cover" />
                    ) : (
                      <div className="h-44 w-full grid place-items-center text-sm text-white/50">
                        No image set
                      </div>
                    )}
                  </div>
                </div>

                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-4`}>
                  <p className="text-xs text-white/60">New Upload</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Preview" className="h-44 w-full object-cover" />
                    ) : (
                      <div className="h-44 w-full grid place-items-center text-sm text-white/50">
                        Pick an image to preview
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <input
                      type="file"
                      accept="image/*"
                      disabled={uploading}
                      onChange={(e) => onPickFile(e.target.files?.[0])}
                      className={fileInput}
                    />
                  </div>
                </div>
              </div>

              {badge}
            </div>

            {/* SECTION IMAGE */}
            <div className={`${card} p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">Section Image</h2>
                  <p className="mt-1 text-sm text-white/60">
                    Upload a new image and it will replace the second section image.
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-4`}>
                  <p className="text-xs text-white/60">Current</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    {currentSectionUrl ? (
                      <img
                        src={currentSectionUrl}
                        alt="Current section"
                        className="h-44 w-full object-cover"
                      />
                    ) : (
                      <div className="h-44 w-full grid place-items-center text-sm text-white/50">
                        No image set
                      </div>
                    )}
                  </div>
                </div>

                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-4`}>
                  <p className="text-xs text-white/60">New Upload</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                    {previewSectionUrl ? (
                      <img
                        src={previewSectionUrl}
                        alt="Preview section"
                        className="h-44 w-full object-cover"
                      />
                    ) : (
                      <div className="h-44 w-full grid place-items-center text-sm text-white/50">
                        Pick an image to preview
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <input
                      type="file"
                      accept="image/*"
                      disabled={uploading}
                      onChange={(e) => onPickSectionFile(e.target.files?.[0])}
                      className={fileInput}
                    />
                  </div>
                </div>
              </div>

              {badge}
            </div>

            {/* FEATURED WORKS MANAGER (NEW) */}
            <div className={`${card} p-6`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">Featured Works</h2>
                  <p className="mt-1 text-sm text-white/60">
                    Upload works, mark as “Show on homepage”, and delete when needed.
                    Homepage will display the latest 8 featured works.
                  </p>
                </div>
                <button onClick={refreshWorks} className={buttonGhost}>
                  Refresh
                </button>
              </div>

              {/* Create new work */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-5`}>
                  <h3 className="font-semibold">Add new work</h3>

                  <div className="mt-4 space-y-3">
                    <input
                      className={input}
                      placeholder="Title (required)"
                      value={workTitle}
                      onChange={(e) => setWorkTitle(e.target.value)}
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        className={input}
                        placeholder="Category (optional)"
                        value={workCategory}
                        onChange={(e) => setWorkCategory(e.target.value)}
                      />
                      <input
                        className={input}
                        placeholder="Location (optional)"
                        value={workLocation}
                        onChange={(e) => setWorkLocation(e.target.value)}
                      />
                      <textarea
                        className={`${input} min-h-[110px]`}
                        placeholder="Overview (short summary)"
                        value={workOverview}
                        onChange={(e) => setWorkOverview(e.target.value)}
                      />

                      <textarea
                        className={`${input} min-h-[160px]`}
                        placeholder="Description (full project description)"
                        value={workDescription}
                        onChange={(e) => setWorkDescription(e.target.value)}
                      />


                    </div>

                    <label className="flex items-center gap-3 text-sm text-white/70">
                      <input
                        type="checkbox"
                        checked={workFeatured}
                        onChange={(e) => setWorkFeatured(e.target.checked)}
                      />
                      Show on homepage (featured)
                    </label>

                    <div className="mt-2">
                      <p className="text-xs text-white/60 mb-2">Cover image (required)</p>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={uploading}
                        onChange={(e) => onPickCover(e.target.files?.[0])}
                        className={fileInput}
                      />
                      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        {coverPreview ? (
                          <img src={coverPreview} alt="Cover preview" className="h-44 w-full object-cover" />
                        ) : coverUrl ? (
                          <div className="h-44 grid place-items-center text-xs text-white/60">
                            Cover uploaded ✅
                          </div>
                        ) : (
                          <div className="h-44 grid place-items-center text-xs text-white/50">
                            No cover selected
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-white/60 mb-2">Gallery images (optional, multiple)</p>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      disabled={uploading}
                      onChange={(e) => onPickGallery(e.target.files)}
                      className={fileInput}
                    />

                      {galleryPreviews.length ? (
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          {galleryPreviews.slice(0, 8).map((src) => (
                            <img
                              key={src}
                              src={src}
                              alt="preview"
                              className="h-16 w-full object-cover rounded-lg border border-white/10"
                            />
                          ))}
                        </div>
                      ) : galleryUrls.length ? (
                        <div className="mt-3 text-xs text-white/60">
                          Gallery uploaded ✅ ({galleryUrls.length} images)
                        </div>
                      ) : null}
                    </div>

                    <button
                      disabled={creatingWork || uploading}
                      onClick={createFeaturedWork}
                      className={`${buttonPrimary} w-full`}
                    >
                      {creatingWork ? "Creating..." : "Create work"}
                    </button>

                    {badge}
                  </div>
                </div>

                {/* Existing works list */}
                <div className={`rounded-2xl ${subtleBorder} bg-black/25 p-5`}>
                  <h3 className="font-semibold">All works</h3>
                  <p className="mt-1 text-xs text-white/50">
                    Click “Show on homepage” to include it in the homepage Featured Works grid (max 8).
                  </p>

                  <div className="mt-4 space-y-3 max-h-[520px] overflow-auto pr-1">
                    {loadingWorks ? (
                      <div className="text-sm text-white/60">Loading…</div>
                    ) : works.length === 0 ? (
                      <div className="text-sm text-white/50">No works yet.</div>
                    ) : (
                      works.map((w) => {
                        const cover = w.coverImageUrl ? `${API_BASE}${w.coverImageUrl}` : "";
                        return (
                          <div
                            key={w.id}
                            className="rounded-xl border border-white/10 bg-black/20 p-3 flex items-center gap-3"
                          >
                            <div className="h-14 w-14 overflow-hidden rounded-lg border border-white/10 bg-black/30">
                              {cover ? (
                                <img src={cover} alt={w.title} className="h-full w-full object-cover" />
                              ) : null}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm truncate">{w.title}</div>
                              <div className="text-xs text-white/50 truncate">
                                {w.category || "—"} • {w.location || "—"}
                              </div>
                            </div>

                            <button
                              onClick={() => toggleFeatured(w)}
                              className="text-xs rounded-lg border border-white/15 bg-white/[0.03] px-3 py-2 hover:bg-white/[0.06] transition"
                            >
                              {w.isFeatured ? "Featured ✓" : "Show on homepage"}
                            </button>

                            <button
                              onClick={() => removeWork(w)}
                              className="text-xs rounded-lg border border-red-400/20 bg-red-500/10 px-3 py-2 text-red-200 hover:bg-red-500/15 transition"
                            >
                              Delete
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {badge}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 text-center text-xs text-white/40">
          Secret Admin • Keep this page private
        </div>
      </div>
    </div>
  );
}