import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from "react-scroll"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSpring, animated } from 'react-spring';


const Navbar = () => {

    const [show, setShow] = useState(false)
    const [showmore, setShowMore] = useState(false)
    const [navShow, setNavShow] = useState(false)
    const [navShowMore, setNavShowMore] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0);

    const [isLink, setIsLink] = useState("home");

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const props = useSpring({
        o: show ? 1 : 0,
        marginTop: show ? 0 : 20,
    });

    const propsTwo = useSpring({
        o: showmore ? 1 : 0,
        marginTop: showmore ? 0 : 20,
    });

    const handleEnter = () => {
        setShow(true);
    };

    const handleLeave = () => {
        setShow(false);
    };

    const handleAboutClick = () => {
        setNavShow(!navShow);
        setNavShowMore(false);
    };

    const navHandleClick = (e) => {
        setNavShowMore(!navShowMore)
        e.stopPropagation()
    }

    const moreLinksEnter = () => {
        setShowMore(true);
    };

    const moreLinksLeave = () => {
        setShowMore(false);
    };

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`navbar ${scrollY > 0 ? "navbar shadow" : ""}`} onMouseLeave={handleLeave}>
            <div className='container'>
                <nav >
                    <div className='logo' >
                        <h3>imagine<span>.</span></h3>
                    </div>
                    <ul className='list'>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-205} duration={800} onClick={() => { setIsLink("home") }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={isLink === "features" ? "active" : ""} to="features" spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("features") }}>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="aboutus"
                                onMouseEnter={handleEnter}
                                className={`about ${isLink === "about" ? "active" : ""}`}
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={800}
                                onClick={() => { setIsLink("about") }}
                            >
                                About Us <KeyboardArrowDownIcon />
                                {show &&
                                    <animated.ul style={props} onMouseLeave={moreLinksLeave} >
                                        <li>
                                            <Link to="/templates" activeclassName="active-link">
                                                More Free Templates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="team" className={isLink === "team" ? "active" : ""} spy={true} smooth={true} offset={-70} duration={800} onClick={() => { setIsLink("team") }}>
                                                Our Team
                                            </Link>
                                        </li>
                                        <li onMouseEnter={moreLinksEnter} >
                                            <Link to="/morelinks" className="morelinks" activeclassName="active-link" >
                                                More Links <KeyboardArrowRightIcon />
                                                {showmore &&
                                                    <animated.ul style={propsTwo}>
                                                        <li>
                                                            <Link to="/one" activeclassName="active-link">
                                                                Menu One
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/two" activeclassName="active-link">
                                                                Menu Two
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/three" activeclassName="active-link">
                                                                Menu Three
                                                            </Link>
                                                        </li>
                                                    </animated.ul>
                                                }
                                            </Link>
                                        </li>
                                    </animated.ul>}
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" className={isLink === "testimonial" ? "active" : ""} spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("testimonial") }}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link to="blog" className={isLink === "blog" ? "active" : ""} spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("blog") }}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" className={isLink === "contact" ? "active" : ""} spy={true} smooth={true} offset={-50} duration={800} onClick={() => { setIsLink("contact") }}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <li>
                            <Link to="home" spy={true} smooth={true} offset={-205} duration={800} onClick={() => { setIsLink("home") }}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={isLink === "features" ? "active" : ""} to="features" spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("features") }}>
                                Features
                            </Link>
                        </li>
                        <li className="nav-about">
                            <Link to="aboutus"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                                onClick={handleAboutClick}
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={800}
                            >
                                About Us{" "}
                                {navShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                {navShow && (
                                    <ul>
                                        <li>
                                            <Link to="/templates" activeClassName="active-link">
                                                More Free Templates
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="team" className={isLink === "team" ? "active" : ""} spy={true} smooth={true} offset={-70} duration={800} onClick={() => { setIsLink("team") }}>
                                                Our Team
                                            </Link>
                                        </li>
                                        <li className="morelinks">
                                            <Link
                                                to="/morelinks"
                                                activeClassName="active-link"
                                                onClick={navHandleClick}
                                            >
                                                More Links{" "}
                                                {navShowMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                {navShowMore && (
                                                    <ul onClick={(e) => e.stopPropagation()}>
                                                        <li>
                                                            <Link to="/one" activeClassName="active-link">
                                                                Menu One
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/two" activeClassName="active-link">
                                                                Menu Two
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/three" activeClassName="active-link">
                                                                Menu Three
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                )}
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </Link>
                        </li>
                        <li className={`${navShow ? 'nav-top' : ''} ${navShowMore ? 'nav-top-more' : ''} ${!navShow ? 'nav-hide' : ''}`}>
                            <Link to="testimonial" className={`testimonials ${isLink === "testimonial" ? "active" : ""}`} spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("testimonial") }}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link to="blog" className={isLink === "blog" ? "active" : ""} spy={true} smooth={true} offset={-120} duration={800} onClick={() => { setIsLink("blog") }}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" className={isLink === "contact" ? "active" : ""} spy={true} smooth={true} offset={-50} duration={800} onClick={() => { setIsLink("contact") }}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Navbar