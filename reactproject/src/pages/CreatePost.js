import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async (event) => {
    event.preventDefault(); // Prevent the form submission from reloading the page

    const user = auth.currentUser;
    if (user) {
      await addDoc(postsCollectionRef, {
        title,
        postText,
        author: { name: user.displayName, id: user.uid },
      });
      navigate("/");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <form onSubmit={createPost}>
          <div className="inputGp">
            <label>Title:</label>
            <input
              placeholder="Title..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="inputGp">
            <label>Post:</label>
            <textarea
              placeholder="Post..."
              value={postText}
              onChange={(event) => setPostText(event.target.value)}
            />
          </div>
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
