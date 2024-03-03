import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FormType } from "./schema";
import ButtonWrapper from "./ButtonWrapper";

interface Props {
  onSubmit: (data: FormType) => Promise<void>;
  onPrev: () => void;
}

const Confirm: FC<Props> = ({ onSubmit, onPrev }): JSX.Element => {
  const methods = useFormContext<FormType>();
  const {
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;

  return (
    <div>
      {Object.entries(getValues()).map((key, value) => {
        return (
          <div key={key.toString()}>
            {key}:{value}
          </div>
        );
      })}
      <ButtonWrapper>
        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="bg-blue-500 text-white p-2 rounded"
          disabled={isSubmitting}
        >
          送信する
        </button>
        <button
          onClick={onPrev}
          type="button"
          className="bg-gray-500 text-white p-2 rounded"
        >
          戻る
        </button>
      </ButtonWrapper>
    </div>
  );
};

export default Confirm;
