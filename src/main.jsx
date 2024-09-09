import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Postread from "./Component/Post-read.jsx";
import Header from "./Component/Header.jsx";
import BlogForm from "./Component/BlogForm.jsx";
import PostListProvider from "./Component/store/post_list_store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/post-view", element: <Postread /> },
  { path: "/create-blog", element: <BlogForm /> },

  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostListProvider>
      <RouterProvider router={router} />
    </PostListProvider>
  </StrictMode>
);
