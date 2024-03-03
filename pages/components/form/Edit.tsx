import { FC } from "react";
import ErrorDisplay from "./ErrorDisplay";
import FieldSet from "./FieldSet";
import Label from "./Label";
import Input from "./Input";
import { useFormContext } from "react-hook-form";
import { FormType } from "./schema";
import ButtonWrapper from "./ButtonWrapper";

interface Props {
  onNext: () => void;
}

const Edit: FC<Props> = ({ onNext }): JSX.Element => {
  const methods = useFormContext<FormType>();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  return (
    <>
      <FieldSet>
        <Label id="surName" text="姓" />
        <Input id="surName" placeholder="姓" {...register("surName")} />
        {errors.surName && (
          <ErrorDisplay type="item">{errors.surName.message}</ErrorDisplay>
        )}
      </FieldSet>

      <FieldSet>
        <Label id="firstName" text="名" />
        <Input id="firstName" placeholder="名" {...register("firstName")} />
        {errors.firstName && (
          <ErrorDisplay type="item">{errors.firstName.message}</ErrorDisplay>
        )}
      </FieldSet>

      <FieldSet>
        <Label id="kana" text="フリガナ" />
        <Input id="kana" placeholder="フリガナ" {...register("kana")} />
        {errors.kana && (
          <ErrorDisplay type="item">{errors.kana.message}</ErrorDisplay>
        )}
      </FieldSet>

      <FieldSet>
        <legend>性別</legend>
        <label>
          <input
            type="radio"
            {...register("gender")}
            value="male"
            className="mr-2"
          />
          男性
        </label>
        <label>
          <input
            type="radio"
            {...register("gender")}
            value="female"
            className="mr-2"
          />
          女性
        </label>

        {errors.gender && (
          <ErrorDisplay type="item">{errors.gender.message}</ErrorDisplay>
        )}
      </FieldSet>

      <FieldSet>
        <Label id="email" text="メールアドレス" />
        <Input id="email" placeholder="メールアドレス" {...register("email")} />
        {errors.email && (
          <ErrorDisplay type="item">{errors.email.message}</ErrorDisplay>
        )}
      </FieldSet>

      <div>
        <FieldSet>
          {errors.confirmPassword && (
            <ErrorDisplay type="field">
              {errors.confirmPassword.message}
            </ErrorDisplay>
          )}
          <Label id="password" text="パスワード" />
          <Input
            id="password"
            type="password"
            placeholder="パスワード"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </FieldSet>

        <FieldSet>
          <Label id="confirmPassword" text="パスワードの確認" />
          <Input
            id="confirmPassword"
            type="password"
            placeholder="パスワードの確認"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <ErrorDisplay type="item">
              {errors.confirmPassword.message}
            </ErrorDisplay>
          )}
        </FieldSet>
      </div>

      <FieldSet>
        <label>
          <input type="checkbox" {...register("agree")} className="mr-2" />
          同意する
        </label>
        {errors.agree && (
          <ErrorDisplay type="item">{errors.agree.message}</ErrorDisplay>
        )}
      </FieldSet>

      <ButtonWrapper>
        <button
          onClick={handleSubmit(onNext)}
          type="button"
          className="bg-blue-500 text-white p-2 rounded"
        >
          確認する
        </button>
      </ButtonWrapper>
    </>
  );
};

export default Edit;
