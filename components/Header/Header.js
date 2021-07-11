import styles from "./Header.module.css"

import Link from "next/link"

export default function Header () {
    return (
        <header className={styles.header}>
            <h1 className={styles.headerLogo}>
                <Link href="/">
                    <a className={styles.headerLogoLink}>OXANA PUHOVA</a>
                </Link>
            </h1>
            <input className={styles.hambInput} type="checkbox" id="hambInput" />
            <ul className={styles.menu}>
                <li><a className={styles.menuLink} href="#design">Дизайн-проект</a></li>
                <li><a className={styles.menuLink}  href="#advise">Консультация</a></li>
                <li><a className={styles.menuLink}  href="#contact">Записаться на проект</a></li>
            </ul>
            <label className={styles.hambLabel} htmlFor="hambInput">
                <svg className={styles.hambIcon} viewBox="0 0 100 100" width="80">
                    <path className={[styles.hambIconLine, styles.hambIconLineTop].join(' ')} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                    <path className={[styles.hambIconLine, styles.hambIconLineMiddle].join(' ')} d="m 30,50 h 40"></path>
                    <path className={[styles.hambIconLine, styles.hambIconLineBottom].join(' ')} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                </svg>
            </label>
      </header>
    )
}