import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Navigation from '../navigation';
import styles from './layout.module.scss';

/**
 * This defines a layout which is used on the whole page
 *
 * @return {JSX.Element} The layout which is used by the application
 */
export default function Layout({children}) {
  const [showOnMobile, setShowOnMobile] = useState(false);

  /**
   * Handles the click on the menu button on mobile interfaces
   */
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

      <main>
        {children}
      </main>

      <span></span>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
