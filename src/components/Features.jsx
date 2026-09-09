import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";

const FEATURES = [
  {
    icon: faCode,
    title: "Build, don't just watch",
    description:
      "Every concept is taught through a live-coded exercise, not a slide.",
  },
  {
    icon: faGraduationCap,
    title: "Taught step by step",
    description:
      "Concepts are sequenced deliberately — no topic appears before its prerequisites.",
  },
  {
    icon: faUser,
    title: "Small class sizes",
    description:
      "Enough room for questions, code review, and pair programming.",
  },
  {
    icon: faBriefcase,
    title: "Portfolio-ready projects",
    description:
      "Leave with real applications you can show, not just finished exercises.",
  },
];
const Features = () => {
  return (
    <>
      <section id="about" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-14 max-w-xl">
            <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Why ReactAcademy
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Designed for how people actually learn to code.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => {
              return (
                <div key={feature.title}>
                  <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center mb-4">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-teal-600"
                      size="lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;