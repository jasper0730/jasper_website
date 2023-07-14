"use client";

import styles from "./Navigation.module.sass";
import Link from "next/link";


import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={styles.root}>
      <ul className={styles.subList}>
        {options &&
          options.map((data, i) => (
            <li
              key={data.key}
              className={`${pathname == data.href ? styles.active : ""}`}
            >
              <Link href={data.href}>{data.option}</Link>
            </li>
          ))}
      </ul>
      <div className={styles.menuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
