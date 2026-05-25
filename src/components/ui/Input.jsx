const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`bg-slate-800 w-full rounded-lg p-2 ${className}`}
    />
  );
};

export default Input;
