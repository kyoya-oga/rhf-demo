import { useState, forwardRef } from "react";

type Props = React.ComponentPropsWithRef<"input">;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        {...props}
        ref={ref}
        className="w-full border p-2 rounded"
        type={showPassword ? "text" : props.type}
      />
      {props.type === "password" && (
        <span
          className="absolute top-1/2 right-2 transform -translate-y-1/2 py-1 px-2 border rounded-full cursor-pointer bg-gray-50"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "隠す" : "隠さない"}
        </span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
