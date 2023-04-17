import "./Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from "react-router-dom";


const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer-social">
                <Link to="">
                    <FacebookIcon />
                </Link>
                <Link to="">
                    <TwitterIcon />
                </Link>
                <Link to="">
                    <InstagramIcon />
                </Link>
                <Link to="">
                    <LinkedInIcon />
                </Link>
                <Link to="">
                    <PinterestIcon />
                </Link>
            </div>
            <p className="footer-info">
                Copyright ©{date} All rights reserved | This template is made with <Link to="">Yusif</Link>
            </p>
        </div>
    )
}

export default Footer