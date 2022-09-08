import styles from "./home.module.scss";

export default function Home(): JSX.Element {
  return (
    <section className={styles.root}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Here is some content</p>
    </section>
  );
}
