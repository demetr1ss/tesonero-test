import styles from './faq.module.scss';

export default function FAQ(): JSX.Element {
  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>
        Lorem ipsum, dolor sit
        <br /> adipisicing elit.
      </h2>
      <p className={styles.description}>Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
      <ul className={styles.questionsList}>
        <li className={`${styles.questionsItem} ${styles.stability}`}>
          <p className={styles.question}>Lorem ipsum, dolor sit amet adipisicing elit.</p>
          <p className={styles.reply}>
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
            cupiditate magnam eaque quae delenit
          </p>
          <button className={styles.button} type='button'>
            <span className='visually-hidden'>показать ответ</span>
          </button>
        </li>
        <li className={`${styles.questionsItem} ${styles.led}`}>
          <p className={styles.question}>Lorem ipsum, dolor sit amet adipisicing elit.</p>
          <p className={styles.reply}>
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
            cupiditate magnam eaque quae delenit
          </p>
          <button className={styles.button} type='button'>
            <span className='visually-hidden'>показать ответ</span>
          </button>
        </li>
        <li className={`${styles.questionsItem} ${styles.lights} ${styles.active}`}>
          <p className={styles.question}>Lorem ipsum, dolor sit amet adipisicing elit.</p>
          <p className={styles.reply}>
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
            cupiditate magnam eaque quae delenit
          </p>
          <button className={styles.button} type='button'>
            <span className='visually-hidden'>скрыть ответ</span>
          </button>
        </li>
        <li className={`${styles.questionsItem} ${styles.splitter}`}>
          <p className={styles.question}>Lorem ipsum, dolor sit amet adipisicing elit.</p>
          <p className={styles.reply}>
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
            cupiditate magnam eaque quae delenit
          </p>
          <button className={styles.button} type='button'>
            <span className='visually-hidden'>показать ответ</span>
          </button>
        </li>
        <li className={`${styles.questionsItem} ${styles.power}`}>
          <p className={styles.question}>Lorem ipsum, dolor sit amet adipisicing elit.</p>
          <p className={styles.reply}>
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum
            cupiditate magnam eaque quae delenit
          </p>
          <button className={styles.button} type='button'>
            <span className='visually-hidden'>показать ответ</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
