import React from 'react';
import { Link } from "react-router-dom";

function Post({ post }) {
    return (
        //wrap the component in a Link container so that it will navigate to the PostDetail page when you click it
        //the "to" prop in the Link container will be the path to the PostDetail page that contains the id. 
        // Example http://localhost:5173/1, this is a path to the PostDetail to open the item with an id of "1". That way the PostDetail page will always contain unique values for every Post you click in the list.
        <Link to={`/posts/${post.id}`}>
            <div style={{border: 'solid', borderWidth: 1, margin: 20, padding: 20}}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        </Link>
    );
  }

  export default Post