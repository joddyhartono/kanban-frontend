const Column = ({ color, text }) => {
  return (
    <div className="w-72 flex flex-col gap-2">
      <div
        className={`w-full rounded-lg p-3 text-xl font-semibold text-center ${color}`}
      >
        {text}
      </div>
      <div className="bg-slate-800 w-full rounded-lg p-3 min-h-24"></div>
    </div>
  );
};

export default Column;
