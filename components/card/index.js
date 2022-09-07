import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import cn from 'classnames';

import styles from './card.module.scss';

/**
 * Defines a card
 *
 * @return {JSX.Element}
 */
export default function Card({children, progress = -1, image}) {
  /**
   * Render an image which has been handed over
   *
   * @return {JSX.Element}
   */
  function renderImage() {
    return (
      <div className={styles.image}>
        <Image
          src={image}
          height={64}
          width={64}
          alt={image}
        />
      </div>
    );
  }

  /**
   * Render a progress bar on bottom of the card
   *
   * @return {JSX.Element}
   */
  function renderProgress() {
    return (
      <div className={styles.progress}>
        {[0, 1, 2, 3, 4].map((item) => {
          if (progress > item) {
            return <span key={item} />;
          }
        })}
      </div>
    );
  }

  return (
    <div className={image ? cn(styles.root, styles['has-image']) : styles.root}>
      {image ? renderImage() : null}

      <span>{children}</span>

      {progress >= 0 ? renderProgress() : null}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any),
  progress: PropTypes.number,
  image: PropTypes.string,
};
