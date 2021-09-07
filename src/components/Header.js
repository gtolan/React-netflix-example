import useImageListManager from './useImageListManager'
import '../styles/Navbar.scss';
import playIcon from '../styles/playIcon.svg';

 const Header = () => {

     const {headerTitle} = useImageListManager();

     return (
         <div className="header-container">
             <div>
                <div className="header-image-container">
                    <img src={headerTitle?.image} alt="header image" className="header-image"/>
                </div>
                <div className="header-title">
                    <p>{headerTitle?.title}</p>
                </div>
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
 }
 
 export default Header;
 