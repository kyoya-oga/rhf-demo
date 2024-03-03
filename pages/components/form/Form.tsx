import React from "react";
import Edit from "./Edit";
import Confirm from "./Confirm";
import { useFormStep } from "./useFormStep";
import { FormType } from "./schema";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Form: React.FC = () => {
  const { formStep, onNext, onPrev } = useFormStep();

  async function onSubmit(data: FormType) {
    console.log(data);
    await sleep(2000);
    try {
      if (Math.random() < 0.5) {
        throw new Error("エラー");
      }
      onNext();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-col w-full">
      {formStep === 0 && <Edit onNext={onNext} />}
      {formStep === 1 && <Confirm onPrev={onPrev} onSubmit={onSubmit} />}
      {formStep === 2 && <p>送信完了しました</p>}
    </form>
  );
};

export default Form;
