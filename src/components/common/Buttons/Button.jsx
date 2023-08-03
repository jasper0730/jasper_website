import styles from './Button.module.sass';

export default function Button({ children, classname }) {
    return (
        <div className={`${styles.btn} ${classname}`}>
          {children}
        </div>
    )
}