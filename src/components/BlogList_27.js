import React from "react";
import Blog_27 from "./Blog_27";

const BlogList_27 = ({blogs, removeItem}) => {
    return (
        <div className="blogs-center">
        { blogs.map( (blog) => {
          const {id, img, title, desc, category} = blog;
          return (
            <Blog_27 id={id} img={img} title={title} desc={desc} category={category} removeItem={removeItem}/>
          )
        })}
        </div>
    )
    
}

export default BlogList_27