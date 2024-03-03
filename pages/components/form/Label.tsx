import { FC } from "react";

interface Props extends React.ComponentPropsWithRef<"label"> {
  id: string;
  text: string;
}

const Label: FC<Props> = ({ id, text, ...props }): JSX.Element => {
  return (
    <label htmlFor={id} {...props}>
      {text}
    </label>
  );
};

export default Label;
