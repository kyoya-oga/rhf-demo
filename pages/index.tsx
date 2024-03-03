import { FormProvider, useForm } from "react-hook-form";
import Form from "./components/form/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormType, defaultValues, schema } from "./components/form/schema";

export default function Home() {
  const methods = useForm<FormType>({
    resolver: yupResolver<FormType>(schema),
    defaultValues,
    mode: "onChange",
  });
  return (
    <div className="bg-gray-100 rounded grid place-items-center my-16 py-10 px-4 container mx-auto max-w-3xl">
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </div>
  );
}
