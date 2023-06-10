import "../styles/main.scss";
import BookIcon from "../assets/book.svg";
import VideoIcon from "../assets/video.svg";
import ProfileIcon from "../assets/profile.svg";


export function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <a href="#">glotalot</a>
            </div>

            <div className="activities">
               <div>
                   <img className="activitiesImage" src={BookIcon} alt="book"/>
               </div>
               <div>
                   <img className="activitiesImage" src={VideoIcon} alt="video"/>
               </div>
            </div>

            <div>
                <img className="profileIcon" src={ProfileIcon} alt=""/>
            </div>
        </div>
    );
}
