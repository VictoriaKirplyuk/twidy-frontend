import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { RegisterDataForm } from "features/register/RegisterDataForm";

export function RegisterPage() {
  return (
    <AuthLayout isWelcomeContent={false}>
      <RegisterDataForm />
      {/* <RegisterCodeForm /> */}
      {/* <RegisterForm /> */}
      <div />
    </AuthLayout>
  );
}
