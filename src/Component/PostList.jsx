// import React, { useContext, useEffect, useState } from "react";
// import Post from "./Post";
// import { PostList as DataPost } from "./store/post_list_store";
// import Wellcome from "./Wellcome";
// import Loader from "./Loader";

// function PostList() {
//   const { postList, loader } = useContext(DataPost);
//   // const [loader, setloader] = useState(false);
//   // useEffect(() => {
//   //   setloader(true);
//   //   fetch("https://dummyjson.com/posts")
//   //     .then((res) => res.json())
//   //     .then((data) => add_Intial(data.posts));
//   //   setloader(false);
//   // }, []);

//   return (
//     <>    {loader && <Loader />}
//         {!loader && <Wellcome />}
//       <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif] ">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8 ">
//           {!loader &&
//             postList.map((post) => {
//               return <Post post={post} key={post.id} />;
//             })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default PostList;
import React, { useState, useContext } from "react";
import Post from "./Post"; // Import the Post component
import { PostList } from "./store/post_list_store"; // Assuming you're using context to fetch posts

const PostsList = () => {
  const { postList } = useContext(PostList); // Get posts from the context
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const postsPerPage = 6; // Number of posts to display per page

  // Calculate the current posts to show based on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  // Navigate to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(postList.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="posts-list">
      <div class="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8 ">
          {currentPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        {/* Pagination controls */}
        <div className="pagination-controls flex justify-center items-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="mr-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-slate-50 font-semibold rounded"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {Math.ceil(postList.length / postsPerPage)}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(postList.length / postsPerPage)}
            className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-slate-50 font-semibold rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
