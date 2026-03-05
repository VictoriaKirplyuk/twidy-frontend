import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormCard } from "shared/ui/formCard/FormCard";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";
import { loginShema } from "features/LoginForm/model/loginShema";
import { Checkbox } from "shared/ui/checkbox/Checkbox";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(loginShema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormCard title="Вход" message="Войдите в аккаунт twidy">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Номер телефона или электронный адрес"
          {...register("emailOrPhone")}
          errorMessage={errors.emailOrPhone?.message}
        />
        <Input
          placeholder="Пароль"
          type="password"
          {...register("password")}
          errorMessage={errors.password?.message}
        />
        <Checkbox title="Запомнить меня" {...register("rememberMe")} />
        <Button type="submit">Войти</Button>
      </form>
    </FormCard>
  );
}
