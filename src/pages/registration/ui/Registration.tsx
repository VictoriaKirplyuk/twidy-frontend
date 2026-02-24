import { AuthLayout } from "shared/ui/layouts/authLayout/AuthLayout";
import { AuthForm } from "shared/ui/authForm/AuthForm";
import { Input } from "shared/ui/input/Input";
import { PageLayout } from "shared/ui/layouts/pageLayout/PageLayout";

export function Registration() {
  return (
    <PageLayout>
      <AuthLayout>
        <AuthForm title="Registration" message="welcome">
          <Input placeholder="login" />
          <Input placeholder="password" errorMessage="invalid password" />
          <button type="submit">Sign in</button>
        </AuthForm>
      </AuthLayout>
    </PageLayout>
  );
}
