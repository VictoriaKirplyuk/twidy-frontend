import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";
import { FormCard } from "shared/ui/formCard/FormCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerCodeShema = yup.object({
  code: yup.string().required(),
});

export function RegisterCodeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerCodeShema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormCard
      title="Код доступа"
      message="Сообщение с инструкцией отправлено Вам на почту"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          placeholder="Код из сообщения"
          {...register("code")}
          errorMessage={errors.code?.message}
        />
        <Button type="submit">Отправить код</Button>
      </form>
    </FormCard>
  );
}
