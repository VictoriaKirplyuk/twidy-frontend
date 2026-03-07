import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { FormCard } from "shared/ui/formCard/FormCard";
import { Input } from "shared/ui/input/Input";
import { Button } from "shared/ui/buttons/Button/Button";

export function ForgotPasswordPage() {
  return (
    <AuthLayout isWelcomeContent={false}>
      <FormCard
        title="Поиск аккаунта"
        message="Введите свой номер мобильного телефона или электронный адрес"
      >
        <Input placeholder="Номер телефона или электронный адрес" />
        <Button type="submit">Продолжить</Button>
      </FormCard>
    </AuthLayout>
  );
}
