import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Post from "./Component/Post";
import PostList from "./Component/PostList";
import { Outlet } from "react-router-dom";
import PostListProvider from "./Component/store/post_list_store";
import BlogForm from "./Component/BlogForm";

function App() {
  return (
    
      
      <div>
      

        <Header />

        <Hero />
        <PostList />
        {/* <Outlet /> */}
      </div>
   
  );
}

export default App;
