import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";
import { FormCard } from "shared/ui/formCard/FormCard";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";
import { registerShema } from "features/register/RegisterForm/model/registerShema";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerShema),
    mode: "onSubmit",
  });
  const ref = useRef(null);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  console.log(watch("emailOrPhone"));
  console.log(errors);

  return (
    <FormCard
      title="Начните пользоваться Twidy"
      message="Введите необходимые данные"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          placeholder="Номер телефона или электронный адрес"
          inputRef={ref}
          {...register("emailOrPhone")}
          errorMessage={errors.emailOrPhone?.message}
        />
        <Button type="submit">Продолжить</Button>
      </form>
    </FormCard>
  );
}
