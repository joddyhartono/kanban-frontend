const Label = ({ className, children, ...props }) => {
  return (
    <label {...props} className="">
      {children}
    </label>
  );
};

export default Label;
