import {Fragment} from "react"

import Head from "next/head"
// import Image from "next/image"
import styles from "../styles/Index.module.css"

import Header from "../components/Header/Header"

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>P U H O V A</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>
        
            <div className={styles.images}>
                {/* <figure className={styles.imagesFigure}>
                    <Image alt="" src="/greenart/wc1-1.jpg" width={1500} height={2000} />
                </figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc1-2.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc1-3.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc1-4.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc2-1.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc2-2.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/wc2-3.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom1-1.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom1-2.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom1-3.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom2-1.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom2-2.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom2-3.jpg"/></figure>
            <figure className={styles.imagesFigure}><img src="img/greenart/bedroom2-4.jpg"/></figure> */}
            </div>
        </Fragment>
    )
}
