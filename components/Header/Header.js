import styles from "./Header.module.css"

import Link from "next/link"

const formatPhoneNumber = (str) => {
    const match = str.replace(/\D/g, '').match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/)

    if (match) {
        return `+${match[1]} (${match[2]}) ${match[2]}-${match[4]}-${match[5]}`
    }

    return str
}

export default function Header () {
    const tel = "79137127132"

    return (
        <header className={`${styles.header} vcard`}>
            <h1 className={styles.headerLogo}>
                <Link href="/">
                    <a className={`${styles.headerLogoLink} fn`}>OXANA PUHOVA</a>
                </Link>
            </h1>
            <div className={styles.headerMenu}>
                <a className={`${styles.instagram} ${styles.desktop}`} href="https://www.instagram.com/oxana_puhova/"><img  src="/instagram.svg" alt="@oxana_puhova" /></a>
                <div className={`${styles.tel} ${styles.desktop}`}><a href={`tel:${tel}`} className="tel">{formatPhoneNumber(tel)}</a></div>
                <input className={styles.hambInput} type="checkbox" id="hambInput" />
                <ul className={styles.menu}>
                    <li className={`${styles.mobile}`}><a className={styles.menuLink} href={`tel:${tel}`}>{formatPhoneNumber(tel)}</a></li>
                    <li><a className={styles.menuLink} href="#design">Дизайн-проект</a></li>
                    <li><a className={styles.menuLink} href="#advise">Консультация</a></li>
                    <li><a className={styles.menuLink} href="#contact">Записаться на проект</a></li>
                </ul>
                <label className={styles.hambLabel} htmlFor="hambInput">
                    <svg className={styles.hambIcon} viewBox="0 0 100 100" width="80">
                        <path className={[styles.hambIconLine, styles.hambIconLineTop].join(' ')} d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                        <path className={[styles.hambIconLine, styles.hambIconLineMiddle].join(' ')} d="m 30,50 h 40"></path>
                        <path className={[styles.hambIconLine, styles.hambIconLineBottom].join(' ')} d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
                    </svg>
                </label>
            </div>
      </header>
    )
}