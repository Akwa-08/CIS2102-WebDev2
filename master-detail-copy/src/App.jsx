import { Routes, Route, Outlet, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostsList from "./components/PostList";

export default function App() {
  //This is a master-detail app. A master-detail relationship is a way to organize and display data in two related views.
  // The "master" view typically shows a list or summary of items, while the "detail" view provides more specific information about each individual item from the master view.
  // In this code, you have 2 pages, the master is the PostLists page which displays the list of posts. The details is the PostDetail page that displays a specific post.

  return (
    <div>
      {/* 
        Declare routes inside Routes Container
      */}
      <Routes>
        {/* 
        first route: declares PostsList to be the default screen when navigating to '/' path. This will display the PostsList component that shows a list of posts.
        second route: uses ":postId" in path as a route parameter value. Example: http://localhost:5173/1 , "1" is the id of the post. This id will be used inside the PostDetail component.
        */}
            <Route path="/" element={<PostsList />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}