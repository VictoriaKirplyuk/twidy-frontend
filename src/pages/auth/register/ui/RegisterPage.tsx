import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { AuthForm } from "shared/ui/authForm/AuthForm";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";

export function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm
        title="Начните пользоваться Twidy"
        message="Введите необходимые данные"
      >
        <Input
          placeholder="Номер телефона или электронный адрес"
          type="email"
        />
        <Button type="submit">Продолжить</Button>
      </AuthForm>
    </AuthLayout>
  );
}
