import * as yup from "yup";

export const schema = yup.object({
  surName: yup.string().required("姓は必須です"),
  firstName: yup.string().required("名は必須です"),
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

export type FormType = yup.InferType<typeof schema>;

export const defaultValues = {
  surName: "テスト",
  firstName: "太郎",
  kana: "テストタロウ",
  gender: "",
  email: "test@test.com",
  password: "12345678",
  confirmPassword: "12345678",
  agree: true,
};
