import styles from "./Footer.module.sass";
import Link from "next/link";
import { Button } from "@/components/common/Buttons";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <ul className={styles.menuList}>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
          </ul>
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
