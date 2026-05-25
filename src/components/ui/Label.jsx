const Label = ({ className, children, ...props }) => {
  return (
    <label {...props} className={`font-medium ${className}`}>
      {children}
    </label>
  );
};

export default Label;
