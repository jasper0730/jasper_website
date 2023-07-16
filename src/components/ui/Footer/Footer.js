import styles from "./Footer.module.sass";
import Link from "next/link";
import { Button } from "@/components/common/Buttons";

export async function getData() {
  const res = await fetch("http://localhost:3000/api/footer");

  return res.json();
}

export default async function Footer() {
  const data = await getData();

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          {data &&
            data.map((obj, i) => (
              <ul className={styles.menuList} key={i}>
                {obj.page &&
                  obj.page.map((option, j) => (
                    <li key={j}>
                      <Link href={option.href} >
                        {option.option}
                      </Link>
                    </li>
                  ))}
              </ul>
            ))}
        </div>
        <div className={styles.footerBottom}>
          <Link className={styles.logo} href="/">
            <p>JASPER</p>
          </Link>
          <div>
            <p>Copyright © 2023 Jasper. All rights reserved.</p>
          </div>
          <Button classname="test">
            <p>訂閱電子報</p>
          </Button>
        </div>
      </div>
    </footer>
  );
}
