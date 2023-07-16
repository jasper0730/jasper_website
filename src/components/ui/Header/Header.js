import styles from "./Header.module.sass";
import { Logo, Navigation } from "@/components/ui";

export async function getData() {
  const res = await fetch("http://localhost:3000/api/navigation")

  return res.json()
}

export default async function Header() {

  const data = await getData()

  return (
    <nav className={styles.root}>
      <div className={styles.container}>
        <Logo />
        <Navigation datas= {data}/>
      </div>
    </nav>
  );
}
