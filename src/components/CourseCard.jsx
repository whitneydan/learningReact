// CourseCard receives its data as props from whichever parent renders it.
// It doesn't know or care where that data came from — a hardcoded array,
// a fetch call, anything. That's the whole point of props: this component
// is now reusable anywhere you have matching data.
const CourseCard = ({ number, level, title, description }) => {
  return (
    <div className="border border-slate-200 rounded-xl p-6 hover:border-teal-400 transition-colors">
      <span className="text-5xl font-bold text-slate-500">{number}</span>
      <p className="text-teal-600 text-xs font-semibold tracking-widest uppercase mt-2">
        {level}
      </p>
      <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
export default CourseCard;