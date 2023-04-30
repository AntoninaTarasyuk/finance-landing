import './TeamList.scss';
import SocialList from '../socials/Socials';

import person1 from '../../assets/team/person1.jpg';
import person12x from '../../assets/team/person1@2x.jpg';
import person1w from '../../assets/team/person1.webp';
import person12xw from '../../assets/team/person1@2x.webp';

import person2 from '../../assets/team/person2.jpg';
import person22x from '../../assets/team/person2@2x.jpg';
import person2w from '../../assets/team/person2.webp';
import person22xw from '../../assets/team/person2@2x.webp';

import person3 from '../../assets/team/person3.jpg';
import person32x from '../../assets/team/person3@2x.jpg';
import person3w from '../../assets/team/person3.webp';
import person32xw from '../../assets/team/person3@2x.webp';

function TeamList() {
  return (
    <ul className='team-list'>
      <li className='team-item'>
        <div className='team-img-wrap'>
          <picture>
            <source srcSet={`${person1w} 1x, ${person12xw} 2x`} type='image/webp' />
            <img
              className='team-img'
              src={person1}
              srcSet={`${person12x} 2x`}
              alt='A man named John Doe'
              loading='lazy'
            />
          </picture>
          <div className='team-social'>
            <SocialList
              FB='https://www.facebook.com/'
              TW='https://www.twitter.com/'
              YT='https://www.youtube.com/channel/'
              LI='https://www.linkedin.com/mwlite/in/antonina-tarasyuk'
            />
          </div>
        </div>
        <h3 className='team-name'>John Doe</h3>
        <p className='team-position'>President</p>
      </li>
      <li className='team-item'>
        <div className='team-img-wrap'>
          <picture>
            <source srcSet={`${person2w} 1x, ${person22xw} 2x`} type='image/webp' />
            <img
              className='team-img'
              src={person2}
              srcSet={`${person22x} 2x`}
              alt='A woman named Jane Doe'
              loading='lazy'
            />
          </picture>
          <div className='team-social'>
            <SocialList
              FB='https://www.facebook.com/'
              TW='https://www.twitter.com/'
              YT='https://www.youtube.com/channel/'
              LI='https://www.linkedin.com/'
            />
          </div>
        </div>
        <h3 className='team-name'>Jane Doe</h3>
        <p className='team-position'>Vice President</p>
      </li>
      <li className='team-item'>
        <div className='team-img-wrap'>
          <picture>
            <source srcSet={`${person3w} 1x, ${person32xw} 2x`} type='image/webp' />
            <img
              className={person3}
              src={`${person32x} 2x`}
              srcSet='../../assets/team/person3@2x.jpg 2x'
              alt='A man named Steve Smith'
              loading='lazy'
            />
          </picture>
          <div className='team-social'>
            <SocialList
              FB='https://www.facebook.com/'
              TW='https://www.twitter.com/'
              YT='https://www.youtube.com/channel/'
              LI='https://www.linkedin.com/'
            />
          </div>
        </div>
        <h3 className='team-name'>Steve Smith</h3>
        <p className='team-position'>Marketing Head</p>
      </li>
    </ul>
  );
}

export default TeamList;
