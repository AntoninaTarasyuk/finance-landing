import './CasesList.scss';

function CasesList() {
  return (
    <ul className='cases-list'>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases1.webp 1x, ../src/assets/cases/cases1@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases1.jpg'
            srcSet='../src/assets/cases/cases1@2x.jpg 2x'
            alt='People in a meeting'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases2.webp 1x, ../src/assets/cases/cases2@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases2.jpg'
            srcSet='../src/assets/cases/cases1@2x.jpg 2x'
            alt='Woman with laptop'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases3.webp 1x, ../src/assets/cases/cases3@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases3.jpg'
            srcSet='../src/assets/cases/cases3@2x.jpg 2x'
            alt='Writing in notepad'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases4.webp 1x, ../src/assets/cases/cases4@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases4.jpg'
            srcSet='../src/assets/cases/cases4@2x.jpg 2x'
            alt='Three skyscrapers'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases5.webp 1x, ../src/assets/cases/cases5@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases5.jpg'
            srcSet='../src/assets/cases/cases5@2x.jpg 2x'
            alt='Shaking hands'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases6.webp 1x, ../src/assets/cases/cases6@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases6.jpg'
            srcSet='../src/assets/cases/cases6@2x.jpg 2x'
            alt='Happy people in office'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases7.webp 1x, ../src/assets/cases/cases7@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases7.jpg'
            srcSet='../src/assets/cases/cases7@2x.jpg 2x'
            alt='Shaking hands'
            loading='lazy'
          />
        </picture>
      </li>
      <li>
        <picture>
          <source srcSet='../src/assets/cases/cases8.webp 1x, ../src/assets/cases/cases8@2x.webp 2x' type='image/webp' />
          <img
            className='cases-img'
            src='../src/assets/cases/cases8.jpg'
            srcSet='../src/assets/cases/cases8@2x.jpg 2x'
            alt='Happy people in office'
            loading='lazy'
          />
        </picture>
      </li>
    </ul>
  );
}

export default CasesList;
