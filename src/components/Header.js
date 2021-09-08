
import '../styles/Navbar.scss';
import playIcon from '../styles/playIcon.svg';
import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalState';

const areEqual = (prev,next) => {
  return prev.headerTitle === next.headerTitle;
}

// 
const Header = React.memo(() => {
    console.log('Header render')

     const { headerTitle } = useContext(GlobalContext);

     return (
         <div className="header-container">
    
                <div className="header-image-container">
                    <img src={headerTitle?.image} alt="header title" className="header-image"/>
                </div>
                <div className="header-title">
                    <p>{headerTitle?.title}</p>
                </div>
       
             <div className="title-controls">
                 <button>
                     <span className="icon">
                         <img src={playIcon} alt="play button icon" className="play-button-icon"/>
                    </span>
                    <span className="text">
                        Play
                    </span>
                </button>
             </div>
         </div>
     )
 }, areEqual)
 
 export default Header;
 