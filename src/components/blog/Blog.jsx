import './Blog.scss';
import Container from '../container/Container';
// import blogImg from '../../assets/home/blog.jpg';

function Blog() {
  return (
    <section id='blog' className='blog-section'>
      <Container>
        <div className='blog-wrap'>
          {/* <img src={blogImg} alt='' className='blog-img' /> */}
          <div className='blog-info'>
            <p className='blog-text'>April 16 2020</p>
            <h2 className='blog-header'>Blog Post One</h2>
            <p className='blog-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
            <button type='button' className='blog-btn'>Read Our Blog</button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Blog;
