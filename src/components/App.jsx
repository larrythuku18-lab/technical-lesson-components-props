import React from "react";
import blog from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div>
      {/* add the <Navbar> component here */}
      <Navbar/>
      {/* add the <Home> component here */}
      <Home  /> 
      {/* add your <About> component here */}
      <About image={blog.image} about={blog.description} />
      {/* add the <ArticleList> component here */}
      <ArticleList posts={blog.posts} />\
    </div>
  );
}

export default App;