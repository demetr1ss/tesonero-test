import {MouseEvent, useState} from 'react';
import {faqData, faqTitle} from '../../mock';
import cn from 'classnames';
import styles from './faq.module.scss';

export default function FAQ(): JSX.Element {
  const [activeTab, setActiveTab] = useState('' as keyof typeof faqData | null);

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentTab = (e.target as HTMLElement).offsetParent?.getAttribute('data-name');

    if (activeTab === currentTab) {
      setActiveTab(null);
      return;
    }

      setActiveTab(currentTab as keyof typeof faqData);
  };

  const setQuestionClassName = (item: string) => cn(styles.questionsItem, {
    [styles.active]: activeTab === item,
  });

  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>
        Lorem ipsum, dolor sit
        <br /> adipisicing elit.
      </h2>
      <p className={styles.description}>Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
      <ul className={styles.questionsList}>
        {faqTitle.map((item) => (
          <li className={setQuestionClassName(item)} data-name={item} key={item}>
            <p className={styles.question}>{faqData[item as keyof typeof faqData].question}</p>
            <p className={styles.reply}>{faqData[item as keyof typeof faqData].reply}</p>
            <button className={styles.button} type='button' onClick={onButtonClick}>
              <span className='visually-hidden'>показать ответ</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
