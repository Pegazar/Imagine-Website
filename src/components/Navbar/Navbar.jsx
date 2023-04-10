import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
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

    const navHandle = () => {
        setNavShow(!navShow)
    }

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
        <div className='navbar' onMouseLeave={handleLeave}>
            <div className='container'>
                <nav >
                    <div className='logo' >
                        <h3>imagine<span>.</span></h3>
                    </div>
                    <ul className='list'>
                        <li>
                            <NavLink exact to="/" activeclassName="active-link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/features" activeclassName="active-link">
                                Features
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="about"
                                activeclassName="active-link"
                                onMouseEnter={handleEnter}
                            >
                                About Us <KeyboardArrowDownIcon />
                                {show &&
                                    <animated.ul style={props} onMouseLeave={moreLinksLeave} >
                                        <li>
                                            <NavLink to="/templates" activeclassName="active-link">
                                                More Free Templates
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/team" activeclassName="active-link">
                                                Our Team
                                            </NavLink>
                                        </li>
                                        <li onMouseEnter={moreLinksEnter} >
                                            <NavLink to="/morelinks" className="morelinks" activeclassName="active-link" >
                                                More Links <KeyboardArrowRightIcon />
                                                {showmore &&
                                                    <animated.ul style={propsTwo}>
                                                        <li>
                                                            <NavLink to="/one" activeclassName="active-link">
                                                                Menu One
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/two" activeclassName="active-link">
                                                                Menu Two
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/three" activeclassName="active-link">
                                                                Menu Three
                                                            </NavLink>
                                                        </li>
                                                    </animated.ul>
                                                }
                                            </NavLink>
                                        </li>
                                    </animated.ul>}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials" activeclassName="active-link">
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeclassName="active-link">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeclassName="active-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                        <li>
                            <NavLink exact to="/" activeclassName="active-link">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/features" activeclassName="active-link">
                                Features
                            </NavLink>
                        </li>
                        <li className="nav-about">
                            <NavLink to="/about" activeClassName="active-link" onClick={navHandle}>
                                About Us{" "}
                                {navShow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                {navShow && (
                                    <ul>
                                        <li>
                                            <NavLink to="/templates" activeClassName="active-link">
                                                More Free Templates
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/team" activeClassName="active-link">
                                                Our Team
                                            </NavLink>
                                        </li>
                                        <li className="morelinks">
                                            <NavLink
                                                to="/morelinks"
                                                activeClassName="active-link"
                                                onClick={navHandleClick}
                                            >
                                                More Links{" "}
                                                {navShowMore ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                {navShowMore && (
                                                    <ul onClick={(e) => e.stopPropagation()}>
                                                        <li>
                                                            <NavLink to="/one" activeClassName="active-link">
                                                                Menu One
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/two" activeClassName="active-link">
                                                                Menu Two
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/three" activeClassName="active-link">
                                                                Menu Three
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                )}
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </NavLink>
                        </li>
                        <li className={`${navShow ? 'nav-top' : ''} ${navShowMore ? 'nav-top-more' : ''} ${!navShow ? 'nav-hide' : ''}`}>
                            <NavLink className="testimonials" to="/testimonials" activeclassName="active-link">
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeclassName="active-link">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeclassName="active-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Navbar