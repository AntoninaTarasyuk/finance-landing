import './TeamList.scss';
import SocialList from '../socials/Socials';

function TeamList() {
  return (
    <ul className='team-list'>
      <li className='team-item'>
        <div className='team-img-wrap'>
          <picture>
            <source srcSet='../../assets/team/person1.webp 1x, ../../assets/team/person1@2x.webp 2x' type='image/webp' />
            <img
              className='team-img'
              src='../../assets/team/person1.jpg'
              srcSet='../../assets/team/person1@2x.jpg 2x'
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
            <source srcSet='../../assets/team/person2.webp 1x, ../../assets/team/person2@2x.webp 2x' type='image/webp' />
            <img
              className='team-img'
              src='../../assets/team/person2.jpg'
              srcSet='../../assets/team/person2@2x.jpg 2x'
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
            <source srcSet='../../assets/team/person3.webp 1x, ../../assets/team/person3@2x.webp 2x' type='image/webp' />
            <img
              className='team-img'
              src='../../assets/team/person3.jpg'
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
