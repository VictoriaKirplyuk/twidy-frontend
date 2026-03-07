import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { LoginForm } from "features/LoginForm";

export function LoginPage() {
  return (
    <AuthLayout isWelcomeContent>
      <LoginForm />
    </AuthLayout>
  );
}
