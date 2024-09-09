import React, { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  add_Intial: () => {},
  loader: () => {},
});

const postReducer = (currpost, action) => {
  switch (action.type) {
    case "Add_Item":
      console.log(currpost);
      return [action.payload.Posts, ...currpost]; // Add the new post to the top of the list

    case "Intial_add":
      return action.payload.post; // Initial fetch of posts from the API

    default:
      return currpost; // Default case returns current state
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, []);
  const [loader, setLoader] = useState(true); // Loader initially true, showing the loader until data is loaded

  const addPost = (Posts) => {
    // Ensures we're adding a single post, not multiple
    dispatchPostList({
      type: "Add_Item",
      payload: { Posts },
    });
  };

  const add_Intial = (post) => {
    // Adds initial fetched posts, ensuring no duplication
    dispatchPostList({ type: "Intial_add", payload: { post } });
  };

  useEffect(() => {
    setLoader(true);
    const Controller = new AbortController();
    const signal = Controller.signal;

    // Fetching posts from the API
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.posts) {
          add_Intial(data.posts); // Only adding posts if the data is valid
        }
        setLoader(false);
      })
      .catch(() => setLoader(false)); // Handle fetch errors

    return () => Controller.abort(); // Cleanup on unmount
  }, []);

  return (
    <PostList.Provider value={{ postList, addPost, loader }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
