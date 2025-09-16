import React from 'react'
import './PlayVideo.css'
import assets from "../../assets/Images/images.js";

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={assets.video} controls autoPlay muted></video>
        <h3>Best YouTube Channel To Learn Web Development</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={assets.like} alt="like" />125</span>
                <span><img src={assets.dislike} alt="dislike" />2</span>
                <span><img src={assets.share} alt="share" />Share</span>
                <span><img src={assets.save} alt="save" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={assets.jack} alt="jack" />
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that makes learning Easy</p>
            <p>Subscribe GreatStack to watch more tutorials on web Development</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={assets.user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and 
                        cc of interconnected networks using standardized communication protocols.
                    </p>
                    <div className="commetn-action">
                        <img src={assets.like} alt="like" />
                        <span>244</span>
                        <img src={assets.dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={assets.user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and 
                        cc of interconnected networks using standardized communication protocols.
                    </p>
                    <div className="commetn-action">
                        <img src={assets.like} alt="like" />
                        <span>244</span>
                        <img src={assets.dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={assets.user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and 
                        cc of interconnected networks using standardized communication protocols.
                    </p>
                    <div className="commetn-action">
                        <img src={assets.like} alt="like" />
                        <span>244</span>
                        <img src={assets.dislike} alt="dislike" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={assets.user_profile} alt="user_profile" />
                <div>
                    <h3>Jack Nicholson <span>1 day ago</span></h3>
                    <p>A global computer network providing a variety of information and 
                        cc of interconnected networks using standardized communication protocols.
                    </p>
                    <div className="commetn-action">
                        <img src={assets.like} alt="like" />
                        <span>244</span>
                        <img src={assets.dislike} alt="dislike" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PlayVideo