import React from "react";
import { Story } from "./model";
interface Props {
  //   setStoryDetailsList: React.Dispatch<React.SetStateAction<[Story] | void>>;
  storyDetailsList: [Story];
}
const convertDate = (date: any) => {
  let ts = new Date(date);
  return ts.toLocaleString();
};
const commentNumber = (comment: [Number] | [any]) => {
  let comments;
  if (comment) {
    comments = comment.length;
  } else {
    comments = 0;
  }
  return comments;
};
const Storycard = ({ storyDetailsList }: Props) => {
  return (
    <ul className="storycard">
      {storyDetailsList.map((story) => (
        <li className="storycard__story" key={story.id}>
          <h3>
            <a href={`https://news.ycombinator.com/user?id=${story.by}`}>
              {story.title}
            </a>
          </h3>
          <div className="storycard__story__details">
            <div className="storycard__story__details__author">
              by {story.by}
            </div>
            <div className="storycard__story__details__date">
              {convertDate(story.time)}
            </div>
            <div className="storycard__story__details__comments">
              {commentNumber(story.kids)} comments
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Storycard;
