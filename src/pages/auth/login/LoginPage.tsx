import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { AuthForm } from "shared/ui/authForm/AuthForm";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";

export function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm title="Вход" message="Войдите в аккаунт twidy">
        <Input placeholder="Номер телефона или электронный адрес" />
        <Input placeholder="Пароль" />
        <Button type="submit">Войти</Button>
      </AuthForm>
    </AuthLayout>
  );
}
