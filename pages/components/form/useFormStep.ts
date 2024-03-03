import { useState } from "react";

export const useFormStep = () => {
  const [formStep, setFormStep] = useState(0);

  const onNext = () => {
    setFormStep((state) => state + 1);
  };

  const onPrev = () => {
    setFormStep((state) => state - 1);
  };

  return {
    formStep,
    onNext,
    onPrev,
  };
};
