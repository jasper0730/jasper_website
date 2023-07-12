import styles from "./Header.module.sass";
import { Logo, Navigation } from "@/components/ui";

export default function Header() {
  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo />
        <Navigation />
      </div>
    </nav>
  );
}
