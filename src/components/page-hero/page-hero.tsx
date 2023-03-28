import Media from 'react-media';
import FeaturesListDesktop from './desktop/features-list-desktop';
import FeaturesListMobile from './mobile/features-list-mobile';
import styles from './page-hero.module.scss';

export default function PageHero(): JSX.Element {
  return (
    <div className={styles.pageHero}>
      <div className={styles.bgGroup1}></div>
      <div className={styles.bgGroup2}></div>
      <Media query={{maxWidth: 1199}}>
        {(matches) => (matches ? <FeaturesListMobile /> : <FeaturesListDesktop />)}
      </Media>
    </div>
  );
}
