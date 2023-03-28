import styles from '../page-hero.module.scss';

export default function FeaturesListDesktop() {
  return (
    <>
      <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur</h1>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.support}`}>
          <div className={styles.itemIcon}>
            <svg width='80' height='88' viewBox='0 0 80 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)' stroke='currentColor' strokeWidth='2'>
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
        <li className={`${styles.item} ${styles.square}`}>
          <div className={styles.itemIcon}>
            <svg width='81' height='93' viewBox='0 0 81 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)'>
                <circle
                  cx='31.69'
                  cy='72.431'
                  r='7'
                  transform='rotate(-15 31.69 72.43)'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <path
                  stroke='currentColor'
                  strokeWidth='2'
                  d='m30.997 31.206 28.978-7.765 7.764 28.978-28.977 7.765z'
                />
                <g filter='url(#b)'>
                  <path
                    stroke='currentColor'
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
        <li className={`${styles.item} ${styles.tablet}`}>
          <div className={styles.itemIcon}>
            <svg width='73' height='88' viewBox='0 0 73 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d_1_239)'>
                <rect x='5.5' y='5' width='54' height='70' rx='3' stroke='currentColor' strokeWidth='2' />
                <path
                  d='M13.5 5H51.5V10C51.5 11.6569 50.1569 13 48.5 13H16.5C14.8431 13 13.5 11.6569 13.5 10V5Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <g filter='url(#filter1_d_1_239)'>
                  <path
                    d='M16.5 58H48.5C50.1569 58 51.5 59.3431 51.5 61V63C51.5 64.6569 50.1569 66 48.5 66H16.5C14.8431 66 13.5 64.6569 13.5 63V61C13.5 59.3431 14.8431 58 16.5 58Z'
                    stroke='#00C368'
                    strokeWidth='2'
                  />
                </g>
              </g>
              <defs>
                <filter
                  id='filter0_d_1_239'
                  x='0.5'
                  y='0'
                  width='72'
                  height='88'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_239' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_239' result='shape' />
                </filter>
                <filter
                  id='filter1_d_1_239'
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
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='2' dy='2' />
                  <feGaussianBlur stdDeviation='2' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_239' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_239' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={`${styles.item} ${styles.imageWrapper}`}>
          <img className={styles.image} src='./img/hero-img.png' alt='брусника.' width={600} height={390} />
        </li>
        <li className={`${styles.item} ${styles.stability}`}>
          <div className={styles.itemIcon}>
            <svg width='109' height='99' viewBox='0 0 109 99' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d_1_284)'>
                <path
                  d='M15.1607 40.329L40.7138 14.7759C46.5717 8.91804 56.0692 8.91804 61.927 14.7759L66.3751 19.2239C72.7391 25.588 72.1152 36.1227 65.2298 42.0046C61.3795 45.2936 57.381 48.849 54.1861 52.0091C50.446 55.7086 46.2117 60.4447 42.3971 64.8965C36.5133 71.7631 25.9905 72.372 19.6345 66.016L15.1607 61.5422C9.30285 55.6844 9.30284 46.1869 15.1607 40.329Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <path
                  d='M59.8823 12.5008L60.2826 12.9011C66.6467 19.2651 66.0228 29.7998 59.1373 35.6817C55.287 38.9708 51.2886 42.5261 48.0937 45.6863C44.3535 49.3857 40.1192 54.1218 36.3046 58.5736C30.4209 65.4402 19.898 66.0491 13.542 59.6931L13.1361 59.2873C7.76622 53.9173 7.26444 45.4045 12.1268 39.6211C16.509 34.4089 21.7879 28.3753 26.3021 23.9101C30.2798 19.9757 35.5538 15.3896 40.2347 11.4712C46.0198 6.62843 54.5204 7.13888 59.8823 12.5008Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <rect
                  x='34.1522'
                  y='26.7675'
                  width='15.6653'
                  height='15.6653'
                  rx='7.83265'
                  transform='rotate(-45 34.1522 26.7675)'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <rect
                  x='69.5'
                  y='63.9998'
                  width='26'
                  height='22'
                  rx='1'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <path
                  d='M71.5 40.9994C78.5 42.9994 82.5 45.9998 82.5002 56.999'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_1_284'
                  x='3.77332'
                  y='3.1373'
                  width='104.727'
                  height='95.8625'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'
                >
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dx='4' dy='4' />
                  <feGaussianBlur stdDeviation='4' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0'
                  />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1_284' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1_284' result='shape' />
                </filter>
              </defs>
            </svg>
          </div>
          <p className={styles.itemText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li className={`${styles.item} ${styles.support2}`}>
          <div className={styles.itemIcon}>
            <svg width='80' height='88' viewBox='0 0 80 88' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)' stroke='currentColor' strokeWidth='2'>
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
        <li className={`${styles.item} ${styles.square2}`}>
          <div className={styles.itemIcon}>
            <svg width='81' height='93' viewBox='0 0 81 93' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#a)'>
                <circle
                  cx='31.69'
                  cy='72.431'
                  r='7'
                  transform='rotate(-15 31.69 72.43)'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <path
                  stroke='currentColor'
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
    </>
  );
}
