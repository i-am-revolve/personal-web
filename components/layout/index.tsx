import { useState } from "react";
import Head from "next/head";
import Navigation from "@components/navigation";
import styles from "./layout.module.scss";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
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
        <Navigation
          showOnMobile={showOnMobile}
          hideEvent={onClickOpenNavigation}
        />
      </aside>

      <span></span>

      <main>{children}</main>

      <span></span>
    </div>
  );
}
