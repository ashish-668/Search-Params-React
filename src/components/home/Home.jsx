import { useNavigate } from "react-router-dom";
import { MAP_DATA } from "../../utils/helper";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    const titleSlug = item.title.toLowerCase().trim().replace(/\s+/g, "-");
    const roleSlug = item.role
      ? item.role.toLowerCase().trim().replace(/\s+/g, "-")
      : "";

    const params = new URLSearchParams();
    params.set("title", titleSlug);
    if (roleSlug) {
      params.set("role", roleSlug);
    }

    navigate(`/blog?${params.toString()}`);
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            My Technologies
          </span>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Tools & Technologies
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore the technologies and tools I use to build modern, responsive
            and interactive web applications.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MAP_DATA.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
            >
              
              <div className="mb-6 flex items-center justify-between">
                <div
                  className={`flex size-16 items-center justify-center rounded-2xl text-3xl ${item.bg} ${item.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                {item.role && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {item.role}
                  </span>
                )}
              </div>

              
              <h2 className="mb-3 text-xl font-bold text-gray-800">
                {item.title}
              </h2>

              <p className="mb-6 text-sm leading-7 text-gray-500">
                {item.description}
              </p>

              
              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <span className="text-sm font-semibold text-gray-400">
                  Technology {item.id}
                </span>

                <button
                  type="button"
                  onClick={() => handleNavigate(item)}
                  aria-label={`View details for ${item.title}`}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
