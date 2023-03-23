import styles from './page-hero.module.scss';

export default function PageHero(): JSX.Element {
  return (
    <div className={styles.pageHero}>
      <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur</h1>
      <img className={styles.image} src='./img/hero-img.png' alt='брусника.' />
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.supportIcon}`}>
            <svg width='80' height='88' viewBox='0 0 80 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)' stroke='#2E3A59' strokeWidth='2'>
                <path d='M64 43.5V29C64 15.745 53.255 5 40 5h-8C18.745 5 8 15.745 8 29v14.5' />
                <path d='M13 35c0-12.703 10.297-23 23-23s23 10.297 23 23v8c0 12.703-10.297 23-23 23S13 55.703 13 43v-8Z' />
                <path d='M33.5 74.5H40c13.255 0 24-10.745 24-24V40' />
                <rect x='5' y='36' width='6' height='14' rx='3' />
                <rect x='61' y='36' width='6' height='14' rx='3' />
              </g>
              <defs>
                <filter
                  id='a'
                  x='0'
                  y='0'
                  width='80'
                  height='87.5'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_248' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_248' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.squareIcon}`}>
            <svg width='81' height='93' viewBox='0 0 81 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)'>
                <circle
                  cx='31.69'
                  cy='72.431'
                  r='7'
                  transform='rotate(-15 31.69 72.43)'
                  stroke='#2E3A59'
                  strokeWidth='2'
                />
                <path
                  stroke='#2E3A59'
                  strokeWidth='2'
                  d='m30.997 31.206 28.978-7.765 7.764 28.978-28.977 7.765z'
                />
                <g filter='url(#b)'>
                  <path
                    stroke='#00C368'
                    strokeWidth='2'
                    d='m43.105 30.032 5.796-1.553 2.07 7.728-5.795 1.552z'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='a'
                  x='19.688'
                  y='18.216'
                  width='61.276'
                  height='74.216'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_275' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_275' result='shape' />
                </filter>
                <filter
                  id='b'
                  x='39.88'
                  y='25.254'
                  width='18.316'
                  height='19.73'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='2' dy='2' />
                  <feGaussianBlur stdDeviation='2' />
                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_275' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_275' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.tabletIcon}`}>
            <svg width='73' height='88' viewBox='0 0 73 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)'>
                <rect x='5.5' y='5' width='54' height='70' rx='3' stroke='#2E3A59' strokeWidth='2' />
                <path d='M13.5 5h38v5a3 3 0 0 1-3 3h-32a3 3 0 0 1-3-3V5Z' stroke='#2E3A59' strokeWidth='2' />
                <g filter='url(#b)'>
                  <path
                    d='M13.5 61a3 3 0 0 1 3-3h32a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-32a3 3 0 0 1-3-3v-2Z'
                    stroke='#00C368'
                    strokeWidth='2'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='a'
                  x='.5'
                  y='0'
                  width='72'
                  height='88'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_239' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_239' result='shape' />
                </filter>
                <filter
                  id='b'
                  x='10.5'
                  y='55'
                  width='48'
                  height='18'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='2' dy='2' />
                  <feGaussianBlur stdDeviation='2' />
                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_239' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_239' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.avocado}`}>
            <svg width='109' height='99' viewBox='0 0 109 99' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)' stroke='#2E3A59' strokeWidth='2'>
                <path d='M15.16 61.542c-5.857-5.858-5.857-15.355 0-21.213l25.554-25.553c5.858-5.858 15.355-5.858 21.213 0l4.448 4.448c6.364 6.364 5.74 16.899-1.145 22.78-3.85 3.29-7.849 6.845-11.044 10.005-3.74 3.7-7.974 8.436-11.789 12.888-5.884 6.866-16.406 7.475-22.762 1.119l-4.474-4.474Z' />
                <path d='M13.136 59.287c-5.37-5.37-5.872-13.883-1.01-19.666 4.383-5.212 9.662-11.246 14.176-15.71 3.978-3.935 9.252-8.521 13.933-12.44 5.785-4.843 14.285-4.332 19.647 1.03l.4.4c6.365 6.364 5.74 16.899-1.145 22.78-3.85 3.29-7.849 6.845-11.043 10.005-3.74 3.7-7.975 8.436-11.79 12.888-5.883 6.866-16.406 7.475-22.762 1.12l-.406-.407Z' />
                <rect
                  x='34.152'
                  y='26.767'
                  width='15.665'
                  height='15.665'
                  rx='7.833'
                  transform='rotate(-45 34.152 26.767)'
                />
                <rect x='69.5' y='64' width='26' height='22' rx='1' />
                <path d='M71.5 41c7 2 11 5 11 15.999' />
              </g>
              <defs>
                <filter
                  id='a'
                  x='3.773'
                  y='3.137'
                  width='104.727'
                  height='95.862'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_284' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_284' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.supportIcon2}`}>
            <svg width='80' height='88' viewBox='0 0 80 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)' stroke='#2E3A59' strokeWidth='2'>
                <path d='M64 43.5V29C64 15.745 53.255 5 40 5h-8C18.745 5 8 15.745 8 29v14.5' />
                <path d='M13 35c0-12.703 10.297-23 23-23s23 10.297 23 23v8c0 12.703-10.297 23-23 23S13 55.703 13 43v-8Z' />
                <path d='M33.5 74.5H40c13.255 0 24-10.745 24-24V40' />
                <rect x='5' y='36' width='6' height='14' rx='3' />
                <rect x='61' y='36' width='6' height='14' rx='3' />
              </g>
              <defs>
                <filter
                  id='a'
                  x='0'
                  y='0'
                  width='80'
                  height='87.5'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_248' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_248' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={styles.item}>
          <div className={`${styles.itemIcon} ${styles.squareIcon2}`}>
            <svg width='81' height='93' viewBox='0 0 81 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)'>
                <circle
                  cx='31.69'
                  cy='72.431'
                  r='7'
                  transform='rotate(-15 31.69 72.43)'
                  stroke='#2E3A59'
                  strokeWidth='2'
                />
                <path
                  stroke='#2E3A59'
                  strokeWidth='2'
                  d='m30.997 31.206 28.978-7.765 7.764 28.978-28.977 7.765z'
                />
                <g filter='url(#b)'>
                  <path
                    stroke='#00C368'
                    strokeWidth='2'
                    d='m43.105 30.032 5.796-1.553 2.07 7.728-5.795 1.552z'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='a'
                  x='19.688'
                  y='18.216'
                  width='61.276'
                  height='74.216'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_275' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_275' result='shape' />
                </filter>
                <filter
                  id='b'
                  x='39.88'
                  y='25.254'
                  width='18.316'
                  height='19.73'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='2' dy='2' />
                  <feGaussianBlur stdDeviation='2' />
                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0' />
                  <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1_275' />
                  <feBlend in='SourceGraphic' in2='effect1_dropShadow_1_275' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </div>
  );
}
