import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import './Gallery.scss';

function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className='gallery'>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        <a href='https://pixabay.com/get/g23803789b4ba44912b00296d40df8109ed423bb1216271f1ebe77e6fb7feebeaddffa0351b035017acce5265d77d6d29fd2e98d3bf4a29f070b5c2fa429908e2_1280.jpg'>
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
        </a>
        <a href='../src/assets/cases/cases2.jpg'>
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
        </a>
        <a href='../src/assets/cases/cases3.jpg'>
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
        </a>
        <a href='../src/assets/cases/cases4.jpg'>
          <picture>
            <source srcSet='../src/assets/cases/cases4.webp 1x, ../src/assets/cases/cases4@2x.webp 2x' type='image/webp' />
            <img
              className='cases-img'
              src='../src/assets/cases/cases4.jpg'
              srcSet='../src/assets/cases/cases4@2x.jpg 2x'
              alt='Writing in notepad'
              loading='lazy'
            />
          </picture>
        </a>
        <a href='../src/assets/cases/cases5.jpg'>
          <picture>
            <source srcSet='../src/assets/cases/cases5.webp 1x, ../src/assets/cases/cases5@2x.webp 2x' type='image/webp' />
            <img
              className='cases-img'
              src='../src/assets/cases/cases5.jpg'
              srcSet='../src/assets/cases/cases5@2x.jpg 2x'
              alt='Writing in notepad'
              loading='lazy'
            />
          </picture>
        </a>
        <a href='../src/assets/cases/cases6.jpg'>
          <picture>
            <source srcSet='../src/assets/cases/cases6.webp 1x, ../src/assets/cases/cases6@2x.webp 2x' type='image/webp' />
            <img
              className='cases-img'
              src='../src/assets/cases/cases6.jpg'
              srcSet='../src/assets/cases/cases6@2x.jpg 2x'
              alt='Writing in notepad'
              loading='lazy'
            />
          </picture>
        </a>
        <a href='../src/assets/cases/cases7.jpg'>
          <picture>
            <source srcSet='../src/assets/cases/cases7.webp 1x, ../src/assets/cases/cases7@2x.webp 2x' type='image/webp' />
            <img
              className='cases-img'
              src='../src/assets/cases/cases7.jpg'
              srcSet='../src/assets/cases/cases7@2x.jpg 2x'
              alt='Writing in notepad'
              loading='lazy'
            />
          </picture>
        </a>
        <a href='../src/assets/cases/cases8.jpg'>
          <picture>
            <source srcSet='../src/assets/cases/cases8.webp 1x, ../src/assets/cases/cases8@2x.webp 2x' type='image/webp' />
            <img
              className='cases-img'
              src='../src/assets/cases/cases8.jpg'
              srcSet='../src/assets/cases/cases8@2x.jpg 2x'
              alt='Writing in notepad'
              loading='lazy'
            />
          </picture>
        </a>
      </LightGallery>
    </div>
  );
}

export default Gallery;
