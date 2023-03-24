import HeaderLogo from './header-logo/header-logo';
import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href='#'>
              NavItem1
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href='#'>
              NavItem2
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.active}`}>
            <a className={styles.navLink} href='#'>
              NavItem3
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.button} type='button'>
        Button
      </button>
    </header>
  );
}
