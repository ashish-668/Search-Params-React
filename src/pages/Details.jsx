import { useSearchParams, useNavigate } from "react-router-dom";
import { MAP_DATA } from "../utils/helper";

const Details = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const titleSlug = searchParams.get("title");
  const roleSlug = searchParams.get("role");

  const slugify = (text) =>
    text ? text.toLowerCase().trim().replace(/\s+/g, "-") : "";

  // Find matching item using search parameters
  const item = MAP_DATA.find((tech) => {
    const matchesTitle = slugify(tech.title) === titleSlug;
    const matchesRole = roleSlug ? slugify(tech.role) === roleSlug : true;
    return matchesTitle && matchesRole;
  });

  if (!item) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-16">
        <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg">
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600">
            Not Found
          </span>
          <h2 className="text-2xl font-bold text-gray-800">
            Technology Not Found
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            No technology matches the search parameters:
          </p>
          <div className="mt-3 rounded-lg bg-gray-50 p-3 text-xs text-gray-600">
            <p><span className="font-semibold">title:</span> {titleSlug || "(none)"}</p>
            <p><span className="font-semibold">role:</span> {roleSlug || "(none)"}</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-600"
          >
            ← Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-16">
      <div className="w-full max-w-xl rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div
            className={`flex size-16 items-center justify-center rounded-2xl text-3xl ${item.bg} ${item.color} shadow-sm`}
          >
            {item.icon}
          </div>

          <span className="rounded-full bg-orange-100 px-3.5 py-1.5 text-xs font-semibold text-orange-600">
            {item.role}
          </span>
        </div>

        {/* Content */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          {item.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-600">
          {item.description}
        </p>

        {/* Search Params Debug / Info */}
        <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Active Query Parameters
          </p>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-md bg-white px-2.5 py-1 font-mono text-gray-700 shadow-xs border border-gray-200">
              title = {titleSlug}
            </span>
            {roleSlug && (
              <span className="rounded-md bg-white px-2.5 py-1 font-mono text-gray-700 shadow-xs border border-gray-200">
                role = {roleSlug}
              </span>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-sm font-semibold text-gray-400">
            Technology #{item.id}
          </span>

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-600"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
