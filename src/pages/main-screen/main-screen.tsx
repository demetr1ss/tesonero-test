import FAQ from '../../components/faq/faq';
import Header from '../../components/header/header';
import PageHero from '../../components/page-hero/page-hero';
import Reviews from '../../components/reviews/reviews';
import styles from './main-screen.module.scss';

export default function MainScreen(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Header />
        <PageHero />
        <Reviews />
        <FAQ />
      </div>
    </main>
  );
}
