// components/Form.tsx
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FieldSet from "./FieldSet";
import ErrorDisplay from "./ErrorDisplay";

type FormValues = {
  name: string;
  kana: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

const schema = yup.object().shape({
  name: yup.string().required("お名前は必須です"),
  kana: yup.string().required("フリガナは必須です"),
  gender: yup.string().required("性別を選択してください"),
  email: yup
    .string()
    .email("メールアドレスの形式が正しくありません")
    .required("メールアドレスは必須です"),
  password: yup
    .string()
    .min(8, "パスワードは8文字以上です")
    .required("パスワードは必須です"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "パスワードが一致しません")
    .required("パスワードの確認が必要です"),
  agree: yup.boolean().oneOf([true], "同意が必要です"),
});

const defaultValues = {
  name: "",
  kana: "",
  gender: "",
  email: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver<FormValues>(schema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <FieldSet>
        <label htmlFor="name">お名前</label>
        <input
          {...register("name")}
          placeholder="お名前"
          className="border p-2 rounded"
        />
        {errors.name && (
          <ErrorDisplay type="item">{errors.name.message}</ErrorDisplay>
        )}
      </FieldSet>

      <FieldSet>
        <label htmlFor="kana">フリガナ</label>
        <input
          {...register("kana")}
          placeholder="フリガナ"
          className="border p-2 rounded"
        />
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
        <input
          {...register("email")}
          placeholder="メールアドレス"
          className="border p-2 rounded"
        />
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
          <input
            {...register("password")}
            type="password"
            placeholder="パスワード"
            className="border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </FieldSet>

        <FieldSet>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="パスワードの確認"
            className="border p-2 rounded"
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

      <div className="flex flex-col gap-2 mt-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          登録する
        </button>
        <button type="button" className="bg-gray-500 text-white p-2 rounded">
          戻る
        </button>
      </div>
    </form>
  );
};

export default Form;
