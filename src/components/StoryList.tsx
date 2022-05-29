import React from "react";
import { Story } from "./model";
import { useEffect, useState } from "react";
import api from "../components/api/posts";

const StoryList = ({ storyIds, fullyLoaded, setFullyLoaded }: any) => {
  const [storyDetailsList, setStoryDetailsList] = useState<[Story]>();
  let yes: any;
  useEffect(() => {
    setFullyLoaded(false);
    // const getStoryDetails = async (storyIds: [Number]) => {
    //   setFullyLoaded(false);
    //   setStoryDetailsList([{}]);
    // for (let i = 0; i < storyIds.length; i++) {
    //   try {
    //     const response = await api.get(
    //       `https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json?print=pretty`
    //     );
    //     storyDetailsList?.push(response.data);
    //     console.log(storyDetailsList);
    //   } catch (err: any) {
    //     if (err.response) {
    //       console.log(err.message);
    //       // setError(err.message);
    //       // setIsLoading(false);
    //     } else {
    //       console.log("hi");
    //       // setError(`Error: ${err.message}`);
    //       // setIsLoading(false);
    //     }
    //   }
    // }
    //   console.log(storyDetailsList);
    //   setFullyLoaded(true);
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

        // storyDetailsList?.push(response.data);
        // console.log(storyDetailsList);
      } catch (err: any) {
        if (err.response) {
          console.log(err.message);
          // setError(err.message);
          // setIsLoading(false);
        } else {
          console.log("hi");
          // setError(`Error: ${err.message}`);
          // setIsLoading(false);
        }
      }
    };

    // return result;
    const getFullDetails = () => {
      if (storyIds) {
        Promise.all(
          storyIds.map((storyId: number) => getStoryDetailsTest(storyId))
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

    // ))
    // getStoryDetails(storyIds);
  }, [storyIds]);
  useEffect(() => {
    console.log(storyDetailsList);
  }, [storyDetailsList]);

  // useEffect(() => {
  //   setFullyLoaded(false);
  //   console.log(storyIds);
  // }, [storyIds]);

  return (
    <div>
      {!fullyLoaded && <div>Loading...</div>}
      {fullyLoaded && <div>Done...</div>}
      {/* {fullyLoaded && (
        <div>
          {" "}
          <h1>story no: {storyIds.length}</h1>
          {storyIds &&
            storyIds.map((storyId: Number) => (
              <div key={storyId.toString()}>{storyId.toString()}</div>
            ))}
        </div>
      )} */}
    </div>
  );
};

export default StoryList;
