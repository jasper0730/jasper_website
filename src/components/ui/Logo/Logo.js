import Link from "next/link";

import styles from "./Logo.module.sass";

export default function Logo() {
  return (
    <div>
      <Link href="/" className={styles.root}>
        <div>
          <p>JASPER</p>
        </div>
      </Link>
    </div>
  );
}
