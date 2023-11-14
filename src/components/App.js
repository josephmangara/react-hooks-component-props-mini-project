import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);

const name = "Overreacted"
const image = "https://via.placeholder.com/215"

function App() {
 

  return (
    <div className="App">
      <Header name={name}/>
      <About img={image}/>
      <ArticleList articles={blogData.posts}/>
    </div>
    
  );
}

export default App;
