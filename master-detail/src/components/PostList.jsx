import React, { useEffect, useState } from 'react';
import Post from './Post'


function PostsList() {
    //initialize state for list of posts
  const [posts, setPosts] = useState([]);

  //on load of component, this useEffect will trigger and call the api, result will be a list of posts
  useEffect(() => {
    //async function
    const getPosts = async () => {
        try{
            // fetch is an async call and returns a promise, but since you are using async/await, you will get the fulfilled value of the promise
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')

            //json() is also an async call and returns a promise.
            //you need to parse the result using json() to be able to use the values in your code.
            const parsedJson = await result.json()

            //if API call is a success, it will set the values for the post list 
            setPosts(parsedJson)
        }catch(e){
            //catch block will handle the rejected value of the promises in try block

            //handle any possible errors here aside from just loggin it
            console.log("error on getting posts")
        }
    }

    //make sure to call the getPosts function to be able to populate the posts state
    getPosts()
  }, []);

  return (
    <div>
      <h2>List of Posts</h2>
      {/* This is a ternary operation to check if posts state is not empty. If it is not empty, it will display the list, else it will only display "Loading". This is because it might take some time to get the results from the network API call */}
      {posts.length > 0 ? posts.map(post => (
        
        <Post key={post.id} post={post} />
      )) : "Loading"}
    </div>
  );
}

export default PostsList