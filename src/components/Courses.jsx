import { useState, useEffect } from "react";
import CourseCard from "./CourseCard.jsx";

// Pretend this data lives on a server somewhere.
const MOCK_COURSES_FROM_SERVER = [
  {
    number: "01",
    level: "Beginner",
    title: "React Foundations",
    description:
      "Components, JSX, props, and state. Build your first interactive UI from scratch.",
  },
  {
    number: "02",
    level: "Intermediate",
    title: "Data & Side Effects",
    description:
      "Fetching data, forms, effects, and lifting state up across multiple components.",
  },
  {
    number: "03",
    level: "Advanced",
    title: "Real Applications",
    description:
      "Routing, context, custom hooks, and structuring apps that scale beyond a tutorial.",
  },
];

// A fake "API call". Returns a Promise, just like a real fetch would.
function fakeFetchCourses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const didFail = Math.random() < 0.15;
      if (didFail) {
        reject(new Error("Failed to load courses. Please try again."));
      } else {
        resolve(MOCK_COURSES_FROM_SERVER);
      }
    }, 1500);
  });
}

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    setIsLoading(true);
    setError(null);

    fakeFetchCourses()
      .then((data) => {
        if (!isCancelled) {
          setCourses(data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section id="courses" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-14 max-w-xl">
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">
            The Path
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Three stages, in order.
          </h2>
          <p className="text-slate-600 text-lg">
            Each stage builds directly on the last — this is the exact sequence
            you'll follow in class.
          </p>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-slate-200 border-t-teal-400 rounded-full animate-spin mb-4" />
            <p className="text-slate-500">Loading courses...</p>
          </div>
        )}

        {/* Error state */}
        {!isLoading && error && (
          <div className="text-center py-12 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 font-medium mb-2">{error}</p>
            <p className="text-slate-500 text-sm">
              (Refresh the page to try again — this is a simulated failure.)
            </p>
          </div>
        )}

        {/* Success state — now delegates each card to CourseCard */}
        {!isLoading && !error && (
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.number} {...course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;