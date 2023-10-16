import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  //useParams is another React hook that you can use to access the route parameter when you navigate into this page.
  //Since the route for this is http://localhost:5173/1, and you declared in the App component the route http://localhost:5173/:postId, the parameter variable you will be able to access is also "postId"
  //make sure the parameter you declared in the App Component matches with the parameter variable you are trying to access in useParams()
  const { postId }= useParams();
  const [post, setPost] = useState(null);

  //on load, this will call the api that access a specific post using the id route parameter (postId)
  //use a javascript ternary string to be able to plugin the postId dynamically
  useEffect(() => {
      const getPost = async () => {
        try{
          // fetch is an async call and returns a promise, but since you are using async/await, you will get the fulfilled value of the promise
          const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

          //json() is also an async call and returns a promise.
          //you need to parse the result using json() to be able to use the values in your code.
          const parsedJson = await result.json()

          //if API call is a success, it will set the post state 
          setPost(parsedJson)
        }catch(e){
          //handle errors here
          console.log(`Error in getting post with id of ${postId}`)
        }
      }

      getPost()
  }, []);

  return (
    <div style={{margin: 20}}>
      <h2>Post Detail</h2>

      {/* This is a ternary operation to check if post state is not null. If it is not null, it will display the post details, else it will only display "Loading". This is because it might take some time to get the result from the network API call */}

      {post !== null ? <div>
      
      <h3>{post.title}</h3>
      <h3>{post.body}</h3>
      </div> : "Loading"}
    </div>
  );
}

export default PostDetail;