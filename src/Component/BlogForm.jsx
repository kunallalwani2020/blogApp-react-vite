import React, { useContext, useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Header from "./Header";
import { PostList } from "./store/post_list_store";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
  const { addPost } = useContext(PostList);
  const navigator = useNavigate();

  const userIDElement = useRef();
  const titleElement = useRef();
  const PostContentElement = useRef();
  const onSubmitData = (e) => {
    e.preventDefault();

    const userid = userIDElement.current.value;
    const titlePost = titleElement.current.value;
    const PostContent = PostContentElement.current.value;
    // addPost(userid, titlePost, PostContent);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titlePost,
        userId: userid,
        body: PostContent,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));

    navigator("/");
  };

  return (
    <>
      <Header />
      {/* <form className="FormData" onSubmit={onSubmitData}>
        <div className="mb-3">
          <label htmlFor="Your User Id " className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter User Id"
            ref={userIDElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Post Title " className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Post Title"
            ref={titleElement}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Post Content
          </label>
          <textarea
            class="form-control"
            placeholder="Tell us more about it"
            rows="3"
            ref={PostContentElement}
          ></textarea>
        </div>
      
        <button type="submit" id="add" className="btn btn-primary">
          Add
        </button>
      </form> */}
      <form
        class="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto my-12"
        onSubmit={onSubmitData}
      >
        <div class="relative flex items-center">
          <input
            type="text"
            placeholder="Enter User ID"
            ref={userIDElement}
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>

        <div class="relative flex items-center">
          <input
            type="text"
            placeholder="Enter Title"
            ref={titleElement}
            class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
          />
        </div>
        <textarea
          placeholder="Blog Content"
          ref={PostContentElement}
          class="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all rows=4"
        ></textarea>
        <button
          type="submit"
          class="px-6 py-2.5 w-full !mt-8 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded active:bg-[#006bff]"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default BlogForm;
