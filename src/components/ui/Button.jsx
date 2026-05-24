const Button = ({ className, children, ...props }) => {
  return (
    <button {...props} className={`w-full py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
