import "../styles/main.scss";

import { Link } from 'react-router-dom';

import BookIcon from "../assets/book.svg";
import ChatIcon from "../assets/chat.svg";
import VideoIcon from "../assets/video.svg";
import ProfileIcon from "../assets/profile.svg";


export function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">glotalot</Link>
            </div>

            <div className="activities">
                <Link to="/">
                    <div>
                        <img className="activitiesImage" src={BookIcon} alt="book"/>
                    </div>
                </Link>
                <Link to="/listen">
                    <div>
                        <img className="activitiesImage" src={VideoIcon} alt="video"/>
                    </div>
                </Link>
                <Link to="/chat">
                    <div>
                        <img className="activitiesImage" src={ChatIcon} alt="video"/>
                    </div>
                </Link>
            </div>

            <div>
                <img className="profileIcon" src={ProfileIcon} alt=""/>
            </div>
        </div>
    );
}
