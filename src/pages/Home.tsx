import React from "react";
import api from "../components/api/posts";
import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import StoryList from "../components/StoryList";
import { Story } from "../components/model";

const Home = () => {
  const [CurrentStoryList, setCurrentStoryList] = useState("Top Stories");
  const [storyIds, setStoryIds] = useState<any>();
  const [fullyLoaded, setFullyLoaded] = useState<Boolean>(false);
  const [url, setUrl] = useState<String>("topstories.json?print=pretty");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  // FUNCTONSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

  const fetchData = async (url: String) => {
    setStoryIds("");
    setIsLoading(true);
    try {
      const response = await api.get(`${url}`);
      setStoryIds(response.data);
      setIsLoading(false);
      setError(null);
    } catch (err: any) {
      if (err.response) {
        console.log(err.message);
        setError(err.message);
        setIsLoading(false);
      } else {
        setError(`Error: ${err.message}`);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);
  // console.log(storyIds);
  const handleApiChange = (api: string, storyType: String | any) => {
    setUrl(api);
    setCurrentStoryList(storyType);
    // fetchData(url);
  };
  return (
    <div className="home container">
      <h1>Hacker News Clone</h1>

      <nav>
        <ul className="nav">
          <li>
            <button
              className={
                CurrentStoryList == "Top Stories" ? "selected btn" : "btn"
              }
              onClick={() => {
                handleApiChange("topstories.json?print=pretty", "Top Stories");
              }}
            >
              Top Stories
            </button>
          </li>
          <li>
            <button
              className={
                CurrentStoryList == "New Stories" ? "selected btn" : "btn"
              }
              onClick={() => {
                handleApiChange("newstories.json?print=pretty", "New Stories");
              }}
            >
              New Stories
            </button>
          </li>
          <li>
            <button
              className={
                CurrentStoryList == "Best Stories" ? "selected btn" : "btn"
              }
              onClick={() => {
                handleApiChange(
                  "beststories.json?print=pretty",
                  "Best Stories"
                );
              }}
            >
              Best Stories
            </button>
          </li>
        </ul>
      </nav>

      <div className="storylist">
        <StoryList
          error={error}
          setError={setError}
          storyIds={storyIds}
          fullyLoaded={fullyLoaded}
          setFullyLoaded={setFullyLoaded}
        />
      </div>
    </div>
  );
};

export default Home;
