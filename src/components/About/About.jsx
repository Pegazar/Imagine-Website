import "./About.scss"
import aboutimg from "../../assets/aboutimg.svg"
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div id="aboutus" className='aboutus'>
            <div className='container'>
                <div className="about-info">
                    <h2>About Us</h2>
                    <div className="about-area">
                        <div className="about-left">
                            <img src={aboutimg} alt="" />
                        </div>
                        <div className="about-right">
                            <h3>Our Mission</h3>
                            <p>Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                            <ul>
                                <li><CheckIcon /> Laborum enim quasi at modi</li>
                                <li><CheckIcon /> Ad at tempore</li>
                                <li><CheckIcon /> Labore quaerat esse</li>
                            </ul>
                            <Link to="">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About