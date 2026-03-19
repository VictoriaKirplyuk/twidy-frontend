import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormCard } from "shared/ui/formCard/FormCard";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";
import { CustomSelect } from "shared/ui/select/CustomSelect";
import { CustomDatePicker } from "shared/ui/datePicker/CustomDatePicker";
import { registerDataShema } from "../model/registerDataShema";
import styles from "./RegisterDataForm.module.scss";

export function RegisterDataForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(registerDataShema),
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    // console.log(data);
    // setValue
  };

  const options = [
    { value: "MALE", label: "Мужчина" },
    { value: "FEMALE", label: "Женщина" },
    { value: "OTHERS", label: "Другое" },
  ];

  return (
    <FormCard
      title="Начните пользоваться Twidy"
      message="Введите необходимые данные"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.fieldList}>
          <div className={styles.fieldListCol}>
            <Input
              placeholder="Пароль"
              {...register("password")}
              errorMessage={errors.password?.message}
            />
            <Input
              placeholder="Имя пользователя"
              {...register("username")}
              errorMessage={errors.username?.message}
            />
            <Input
              placeholder="Личное имя"
              {...register("firstName")}
              errorMessage={errors.firstName?.message}
            />
            <Input
              placeholder="Второе имя"
              {...register("middleName")}
              errorMessage={errors.middleName?.message}
            />
          </div>
          <div className={styles.fieldListCol}>
            <Input
              placeholder="Фамилия"
              {...register("secondName")}
              errorMessage={errors.secondName?.message}
            />
            <CustomSelect options={options} placeholder="Гендер" />
            <CustomDatePicker />
          </div>
        </div>
        <Button type="submit">Продолжить</Button>
      </form>
    </FormCard>
  );
}
