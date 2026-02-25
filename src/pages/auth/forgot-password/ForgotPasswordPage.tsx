import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { AuthForm } from "shared/ui/authForm/AuthForm";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";

export function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthForm
        title="Поиск аккаунта"
        message="Введите свой номер мобильного телефона или электронный адрес"
      >
        <Input placeholder="Номер телефона или электронный адрес" />
        <Button type="submit">Продолжить</Button>
      </AuthForm>
    </AuthLayout>
  );
}
