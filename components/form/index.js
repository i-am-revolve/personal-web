import React from 'react';
import Card from '../card';

import styles from './form.module.scss';

/**
 * Creates a Form
 *
 * @return {JSX.Element}
 */
export default function Form() {
  return (
    <Card>
      <form className={styles.root}>
        <label htmlFor="email">Email</label>
        <label htmlFor="company">Company</label>
        <input id="email" name="email" type="email" />
        <input id="company" name="company" />
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </form>
    </Card>
  );
}
