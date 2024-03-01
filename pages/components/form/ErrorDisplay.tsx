import { FC } from "react";

interface Props {
  children: React.ReactNode;
  type: "field" | "item";
}

const ErrorDisplay: FC<Props> = ({ children, type }): JSX.Element => {
  const className = type === "field" ? "bg-pink-50" : "";
  return (
    <div
      className={`p-2 rounded border-red-500 border text-red-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default ErrorDisplay;
