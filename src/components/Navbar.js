import '../styles/Navbar.scss';
import { useInView } from 'react-intersection-observer'
import netflixIcon from '../styles/netflix.svg';
import chromecaseIcon from '../styles/chromecaseIcon.svg';
import searchIcon from '../styles/searchIcon.svg';
import profileIcon from '../styles/profile.svg';
import React from 'react';

const Navbar = React.memo(() => {

    const [ref, inView] = useInView({
        threshold: 0.4,
    })

    return (
        <nav ref={ref} >
            <div className="top-nav">
                    <a className="left-icon" to="/">
                        <img src={netflixIcon} alt="netflix home icon" />
                    </a>
                    <div className="right-top-nav">
                        <img className="chrome-cast" alt="chromecast icon" src={chromecaseIcon} />
                        <img className="search" alt="search icon" src={searchIcon} />
                        <img className="profile" alt="profile icon" src={profileIcon} />
                    </div>

            </div>
            <div className={`bottom-nav ${inView ? 'in-view' : 'out-of-view'}`} data-testid="bottom-navbar">
                <a role="button" to="/tv-series">
                    Series
                </a>
                <a role="button" to="/films">
                    Films
                </a>
                <button>
                    Categories
                </button>

            </div>
        </nav>
    )
})

export default Navbar;
