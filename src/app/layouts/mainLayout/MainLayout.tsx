import styles from "app/layouts/mainLayout/MainLayout.module.scss";
import { AppRouter } from "app/router/AppRouter";
import { Header } from "widgets/header/ui/Header";
import { Footer } from "widgets/footer/ui/Footer";

export function MainLayout() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
