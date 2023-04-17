import "./Features.scss"
import AutorenewIcon from '@mui/icons-material/Autorenew';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PowerIcon from '@mui/icons-material/Power';
import { Link } from "react-router-dom";





const Features = () => {
  return (
    <div id="features" className="features">
      <div className="container">
        <div className="features-title">
          <h2>Imagine Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos <br /> quaerat sapiente nam, id vero.</p>
        </div>
        <div className="features-box">
          <div className="box">
            <div className="img-box">
              <AutorenewIcon />
            </div>
            <h3>Marketing Consulting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
          <div className="box">
            <div className="img-box">
              <StoreIcon />
            </div>
            <h3>Market Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
          <div className="box">
            <div className="img-box">
              <ShoppingBasketIcon />
            </div>
            <h3>Easy Purchase</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
          <div className="box">
            <div className="img-box">
              <SettingsBackupRestoreIcon />
            </div>
            <h3>Marketing Consulting</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
          <div className="box">
            <div className="img-box">
              <SentimentSatisfiedAltIcon />
            </div>
            <h3>Market Analysis</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
          <div className="box">
            <div className="img-box">
              <PowerIcon />
            </div>
            <h3>Easy Purchase</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <Link to="">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features