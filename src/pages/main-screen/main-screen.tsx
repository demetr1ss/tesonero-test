import FAQ from '../../components/faq/faq';
import Header from '../../components/header/header';
import PageHero from '../../components/page-hero/page-hero';
import Reviews from '../../components/reviews/reviews';
// import styles from './main-screen.module.scss';

export default function MainScreen() {
  return (
    <>
      <Header />
      <PageHero />
      <Reviews />
      <FAQ />
    </>
  );
}
