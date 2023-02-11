import Header from "./components/Header/Header";
import React from "react";
import Auth from "./components/Login/Auth";
import Blogs from "./components/Blogs/Blogs";
import UserBlogs from "./components/UserBlogs/UserBlogs";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import AddBlog from "./components/AddBlog/AddBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useSelector} from "react-redux"
function App() {
  const isLoggedIn =useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/add" element={<AddBlog />} />
            <Route path="/myBlogs" element={<UserBlogs />} />
            <Route path="/myBlogs/:id" element={<BlogDetail />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
