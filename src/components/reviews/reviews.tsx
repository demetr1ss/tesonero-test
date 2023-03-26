import styles from './reviews.module.scss';

export default function Reviews(): JSX.Element {
  return (
    <div className={styles.reviews}>
      <h2 className={styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.big}`}>
          <img src='./img/avatar.png' alt='аватар' width={187} height={190} />
          <div className={styles.quote}>
            <p className={styles.reviewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi
              autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae
              deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi
              error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum
              omnis magnam eligendi error nobis dolore?
            </p>
            <span className={styles.reviewAuthor}>Jane Doe</span>
          </div>
        </li>
        <li className={`${styles.item} ${styles.left}`}>
          <img src='./img/avatar.png' alt='аватар' width={97} height={99} />
          <div className={styles.quote}>
            <p className={styles.reviewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              <br /> consectetur animi autem aliquid
            </p>
            <span className={styles.reviewAuthor}>Jane Doe</span>
          </div>
        </li>
        <li className={`${styles.item} ${styles.right}`}>
          <img src='./img/avatar.png' alt='аватар' width={97} height={99} />
          <div className={styles.quote}>
            <p className={styles.reviewText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut
              <br /> consectetur animi autem aliquid
            </p>
            <span className={styles.reviewAuthor}>Jane Doe</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
