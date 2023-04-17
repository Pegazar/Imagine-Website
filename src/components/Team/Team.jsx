import "./Team.scss"
import cloe from "../../assets/cloe.webp"
import john from "../../assets/john.webp"
import will from "../../assets/will.webp"
import nicolas from "../../assets/nicolas.webp"
import george from "../../assets/george.webp"
import emely from "../../assets/emely.webp"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";


const Team = () => {
  return (
    <div id="team" className="team">
      <div className="container">
        <div className="team-info">
          <h2>Our Team</h2>
          <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos <br /> quaerat sapiente nam, id vero.</p>
          <div className="team-area" >
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={cloe} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>Cloe Marena</h3>
                <span>PRESIDENT</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={john} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>John Rooster</h3>
                <span>MARKETING</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={will} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>Will Turner</h3>
                <span>MARKETING</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={nicolas} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>Nicolas Stainer</h3>
                <span>FINANCING</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={george} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>George Brook</h3>
                <span>FOUNDER</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
            <div className="team-box">
              <div className="person">
                <div className="team-img">
                  <img src={emely} alt="" />
                </div>
                <div className="team-social">
                  <Link to=""><FacebookIcon /></Link>
                  <Link to=""><TwitterIcon /></Link>
                  <Link to=""><InstagramIcon /></Link>
                </div>
              </div>
              <div className="team-text">
                <h3>Emely Hopson</h3>
                <span>MARKETING</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum excepturi corporis qui doloribus perspiciatis ipsa modi accusantium repellat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team