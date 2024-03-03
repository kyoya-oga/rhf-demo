import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const FieldSet: FC<Props> = ({ children }) => {
  return (
    <fieldset className="flex flex-col gap-2 border-b py-4">
      {children}
    </fieldset>
  );
};

export default FieldSet;
