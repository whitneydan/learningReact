import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircle } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <>
      <section id="home" className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: headline + copy + CTAs */}
          <div>
            <p className="text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Introduction to React
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Learn React the way
              <br />
              it's actually used.
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-md">
              ReactAcademy takes you from plain JavaScript to building real,
              component-based interfaces — one concept at a time, no shortcuts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="bg-teal-400 text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-teal-300 transition-colors inline-flex items-center gap-2"
              >
                Start Learning
                <FontAwesomeIcon icon={faArrowRight} size={16}/>
              </a>
              <a
                href="#about"
                className="border border-slate-700 text-slate-200 px-6 py-3 rounded-md font-semibold hover:bg-slate-800 transition-colors"
              >
                Why ReactAcademy
              </a>
            </div>
          </div>

          {/* Right: signature element — a static "code preview" card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
            {/* fake window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
              <FontAwesomeIcon icon={faCircle} className="text-red-400" size={10}/>
              <FontAwesomeIcon icon={faCircle} className="text-yellow-400" size={10}/>
              <FontAwesomeIcon icon={faCircle} className="text-green-400" size={10}/>
              <span className="ml-2 text-xs text-slate-500 font-mono">
                ProfileCard.jsx
              </span>
            </div>

            {/* fake syntax-highlighted code, hand-styled with spans */}
            <pre className="p-5 text-sm font-mono leading-relaxed overflow-x-auto">
              <code>
                <span className="text-purple-400">function</span>{" "}
                <span className="text-teal-300">ProfileCard</span>
                <span className="text-slate-400">() {"{"}</span>
                {"\n  "}
                <span className="text-purple-400">return</span>{" "}
                <span className="text-slate-400">(</span>
                {"\n    "}
                <span className="text-slate-500">&lt;</span>
                <span className="text-red-300">div</span>{" "}
                <span className="text-sky-300">className</span>
                <span className="text-slate-400">=</span>
                <span className="text-amber-300">"card"</span>
                <span className="text-slate-500">&gt;</span>
                {"\n      "}
                <span className="text-slate-500">&lt;</span>
                <span className="text-red-300">h2</span>
                <span className="text-slate-500">&gt;</span>
                <span className="text-slate-200">Jane Doe</span>
                <span className="text-slate-500">&lt;/</span>
                <span className="text-red-300">h2</span>
                <span className="text-slate-500">&gt;</span>
                {"\n    "}
                <span className="text-slate-500">&lt;/</span>
                <span className="text-red-300">div</span>
                <span className="text-slate-500">&gt;</span>
                {"\n  "}
                <span className="text-slate-400">)</span>
                {"\n"}
                <span className="text-slate-400">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;