import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <a href='https://sleepydoggy.shop'>SleepyDoggy</a>&nbsp;- 🐕
      </p>
      <div className={styles.footer__left}>
        <a href='https://www.consulitate.com'>
          Created & Hosted by Consulitate
        </a>
      </div>
    </footer>
  );
}
