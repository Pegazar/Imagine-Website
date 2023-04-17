import { Link } from 'react-router-dom'
import './Blog.scss'
import cat from "../../assets/cat.webp"
import tablet from "../../assets/tablet.webp"

const Blog = () => {
  return (
    <div className='blog'>
        <div className="container">
            <div className="blog-info">
                <h2>Blog Posts</h2>
                <div className="blog-area">
                    <div className="blog-box">
                        <img src={cat} alt="" />
                        <h3>
                            <Link to="">Make Your Business More Profitable</Link>
                        </h3>
                        <div>
                            <span>Ham Brook</span> • <span> Jan 18, 2019</span> • <Link to="">News</Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                        <p>
                            <Link to=''>Continue Reading...</Link>
                        </p>
                    </div>
                    <div className="blog-box">
                        <img src={tablet} alt="" />
                        <h3>
                            <Link to="">Make Your Business More Profitable</Link>
                        </h3>
                        <div>
                            <span>Ham Brook</span> • <span> Jan 18, 2019</span> • <Link to="">News</Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                        <p>
                            <Link to=''>Continue Reading...</Link>
                        </p>
                    </div>
                    <div className="blog-box">
                        <img src={cat} alt="" />
                        <h3>
                            <Link to="">Make Your Business More Profitable</Link>
                        </h3>
                        <div>
                            <span>Ham Brook</span> • <span> Jan 18, 2019</span> • <Link to="">News</Link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                        <p>
                            <Link to=''>Continue Reading...</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog