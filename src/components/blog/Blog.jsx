import './Blog.scss';
import Container from '../container/Container';

import blog from '../../assets/home/blog.jpg';
import blog2x from '../../assets/home/blog@2x.jpg';
import blogw from '../../assets/home/blog.webp';
import blog2xw from '../../assets/home/blog@2x.webp';

function Blog() {
  return (
    <section id='blog' className='blog-section'>
      <picture>
        <source srcSet={`${blogw} 1x, ${blog2xw} 2x`} type='image/webp' />
        <img
          className='blog-img'
          src={blog}
          srcSet={`${blog2x} 2x`}
          alt='Desk with coffee and notebook'
          loading='lazy'
        />
      </picture>
      <Container>
        <div className='blog-info'>
          <p className='blog-text'>April 16 2020</p>
          <h2 className='blog-header'>Blog Post One</h2>
          <p className='blog-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
          <button type='button' className='blog-btn'>Read Our Blog</button>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
