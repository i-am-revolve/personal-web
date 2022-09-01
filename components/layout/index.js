import Head from 'next/head'
import Navigation from '../navigation'
import { useState } from 'react'

import styles from './layout.module.scss'

export default function Layout({ children }) {
    const [showOnMobile, setShowOnMobile] = useState(false);

    function onClickOpenNavigation() {
        setShowOnMobile(!showOnMobile);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>CV</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <button onClick={onClickOpenNavigation}>Menu</button>
            </header>

            <aside>
                <Navigation showOnMobile={showOnMobile} hideEvent={onClickOpenNavigation} />
            </aside>

            <main>
                { children }
            </main>

            <footer>
                <span>&copy; Sandro Schaurer | Last updated: { new Date().toLocaleDateString('de-DE') } | View sourcecode on <a href="https://github.com/r-evolve/personal-web/">GitHub</a></span>
            </footer>
        </div>
    );
}