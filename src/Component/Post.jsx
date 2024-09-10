import React, { useState } from "react";
import Postread from "./Post-read";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if content is expanded or not
  const navigate = useNavigate();
  // const toggleContent = () => {
  //   setIsExpanded((prevState) => !prevState); // Toggle between show more and show less
  // };

  // Get the current date
  const currentDate = new Date().toLocaleDateString();

  const nextPage = () => {
    navigate("/post-view", { state: { post } }); // Using state to pass the post data
  };

  return (
    <div className="bg-white rounded overflow-hidden shadow-lg h-auto">
      <img
        onClick={nextPage}
        src="https://readymadeui.com/cardImg.webp"
        alt="Blog Post"
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">{post.title}</h3>

        {/* <div
          className={`text-gray-500 text-sm transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-screen" : "max-h-24"
          }`}
          style={{ whiteSpace: "pre-wrap" }} // Preserve line breaks
        >
          {post.body}
        </div> */}

        {/* <p className="text-orange-500 text-[13px] font-semibold mt-4">
          {currentDate}
        </p> */}

        {/* <button
          // onClick={toggleContent}
          className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px]"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button> */}
      </div>
    </div>
  );
}

export default Post;
