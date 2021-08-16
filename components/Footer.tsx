import styles from '../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer}>
        <a href='https://sleepydoggy.shop'>SleepyDoggy</a> |
        <a href='https://www.consulitate.com'>
          Created & Hosted by Consulitate
        </a>
      </div>
    </footer>
  );
}
