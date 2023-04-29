import './Blog.scss';
import Container from '../container/Container';

function Blog() {
  return (
    <section id='blog' className='blog-section'>
      <picture>
        <source srcSet='../src/assets/home/blog.webp 1x, ../src/assets/home/blog@2x.webp 2x' type='image/webp' />
        <img
          className='blog-img'
          src='../src/assets/home/blog.jpg'
          srcSet='../src/assets/home/blog@2x.jpg 2x'
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
