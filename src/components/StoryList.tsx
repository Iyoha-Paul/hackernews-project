import React from "react";
import { Story } from "./model";
import { useEffect, useState } from "react";
import api from "../components/api/posts";
import Storycard from "./Storycard";
interface Props {
  setFullyLoaded: React.Dispatch<React.SetStateAction<Boolean>>;
  storyIds: [Number];
  setError: React.Dispatch<React.SetStateAction<String>>;
  fullyLoaded: Boolean;
  error: String;
}
const StoryList = ({
  storyIds,
  fullyLoaded,
  setFullyLoaded,
  setError,
  error,
}: Props) => {
  const [storyDetailsList, setStoryDetailsList] = useState<[Story]>([{}]);

  useEffect(() => {
    setFullyLoaded(false);

    // };
    const getStoryDetailsTest = async (storyId: Number) => {
      let result;
      try {
        const response = await api.get(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
        );
        result = response.data;
        console.log(response.data);
        return result;
      } catch (err: any) {
        if (err.response) {
          console.log(err.message);
          setError(err.message);
          // setIsLoading(false);
        } else {
          console.log("hi");
          setError(`Error: ${err.message}`);
          // setIsLoading(false);
        }
      }
    };

    // return result;
    const getFullDetails = () => {
      if (storyIds) {
        Promise.all(
          storyIds.map((storyId: Number) => getStoryDetailsTest(storyId))
        )
          // .then(() => {
          //   // yes = storyIds.map((storyId: number) => getStoryDetailsTest(storyId));
          //   return yes;
          // })
          .then((values: any) => {
            setStoryDetailsList(values);
            // console.log(storyDetailsList);
            setFullyLoaded(true);
            console.log("yes");
          });
      }
      // console.log(yes);
    };
    getFullDetails();
  }, [storyIds]);
  useEffect(() => {
    console.log(storyDetailsList);
  }, [storyDetailsList]);

  return (
    <div>
      {!fullyLoaded && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {fullyLoaded && !error && (
        <Storycard storyDetailsList={storyDetailsList} />
      )}
    </div>
  );
};

export default StoryList;
