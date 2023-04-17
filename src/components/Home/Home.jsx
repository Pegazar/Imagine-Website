import "./Home.scss"
import homepic from "../../assets/home.svg"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div id='home' className='home'>
      <div className='container'>
        <div className='home-area'>
          <div className='home-left'>
            <h1>Make Your Business <br /> More Profitable</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <Link to="">Get Started</Link>
          </div>
          <div className='home-right'>
            <img src={homepic} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home