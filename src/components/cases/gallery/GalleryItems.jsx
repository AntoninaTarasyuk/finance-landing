import img1 from '../../../assets/cases/cases1.jpg';
import img12x from '../../../assets/cases/cases1@2x.jpg';
import img1w from '../../../assets/cases/cases1.webp';
import img12xw from '../../../assets/cases/cases1@2x.webp';

import img2 from '../../../assets/cases/cases2.jpg';
import img22x from '../../../assets/cases/cases2@2x.jpg';
import img2w from '../../../assets/cases/cases2.webp';
import img22xw from '../../../assets/cases/cases2@2x.webp';

import img3 from '../../../assets/cases/cases3.jpg';
import img32x from '../../../assets/cases/cases3@2x.jpg';
import img3w from '../../../assets/cases/cases3.webp';
import img32xw from '../../../assets/cases/cases3@2x.webp';

import img4 from '../../../assets/cases/cases4.jpg';
import img42x from '../../../assets/cases/cases4@2x.jpg';
import img4w from '../../../assets/cases/cases4.webp';
import img42xw from '../../../assets/cases/cases4@2x.webp';

import img5 from '../../../assets/cases/cases5.jpg';
import img52x from '../../../assets/cases/cases5@2x.jpg';
import img5w from '../../../assets/cases/cases5.webp';
import img52xw from '../../../assets/cases/cases5@2x.webp';

import img6 from '../../../assets/cases/cases6.jpg';
import img62x from '../../../assets/cases/cases6@2x.jpg';
import img6w from '../../../assets/cases/cases6.webp';
import img62xw from '../../../assets/cases/cases6@2x.webp';

export function GalleryItem1() {
  return (
    <picture>
      <source srcSet={`${img1w} 1x, ${img12xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img1}
        srcSet={`${img12x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
export function GalleryItem2() {
  return (
    <picture>
      <source srcSet={`${img2w} 1x, ${img22xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img2}
        srcSet={`${img22x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
export function GalleryItem3() {
  return (
    <picture>
      <source srcSet={`${img3w} 1x, ${img32xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img3}
        srcSet={`${img32x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
export function GalleryItem4() {
  return (
    <picture>
      <source srcSet={`${img4w} 1x, ${img42xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img4}
        srcSet={`${img42x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
export function GalleryItem5() {
  return (
    <picture>
      <source srcSet={`${img5w} 1x, ${img52xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img5}
        srcSet={`${img52x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
export function GalleryItem6() {
  return (
    <picture>
      <source srcSet={`${img6w} 1x, ${img62xw} 2x`} type='image/webp' />
      <img
        className='gallery-img'
        src={img6}
        srcSet={`${img62x} 2x`}
        alt='People in a meeting'
        loading='lazy'
      />
    </picture>
  );
}
