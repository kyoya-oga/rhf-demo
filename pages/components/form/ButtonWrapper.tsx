import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonWrapper: FC<Props> = ({ children }): JSX.Element => {
  return <div className="flex flex-col gap-2 mt-4">{children}</div>;
};

export default ButtonWrapper;
