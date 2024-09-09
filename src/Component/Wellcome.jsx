import React, { useContext } from "react";
import { PostList } from "./store/post_list_store";
import Loader from "./Loader";

function Wellcome() {
  const { postList } = useContext(PostList);
  return (
    <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif] ">
      <div class="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto ">
        <h2 class="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          {postList.length === 0 ? "No Post Available" : "Latest Blog Posts"}
        </h2>
      </div>
      
    </div>
  );
}

export default Wellcome;
