import React, { useEffect, useState } from "react";
import "./Feed.css";
import assets from "../../assets/Images/images.js";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data.js";

const Feed = ({ catergory }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true); // show loader while fetching
      console.log("API_KEY-->", API_KEY);
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catergory}&key=${API_KEY}`;
      const response = await fetch(videoList_url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result?.items);
    } catch (err) {
      setError(err.message); // handle error
    } finally {
      setLoading(false); // hide loader
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [catergory, API_KEY]);
  if (loading) {
    <h1>Data Loading from API</h1>;
  }
  if (error) {
    <h1>{error}</h1>;
  }
  return (
    <div className="feed">
      {data &&
        data.length > 0 &&
        data.map((items, index) => {
          return (
            <Link to={`video/${items.snippet.categoryId}/`} className="card">
              <img src={assets.thumbnail1} alt="thumbnail" />
              <h2>
                Best channel to learn coding that help you to be a web
                developer.
              </h2>
              <h3>Greatstack</h3>
              <p>15k views &bull;2 days ago</p>
            </Link>
          );
        })}
    </div>
  );
};

export default Feed;
