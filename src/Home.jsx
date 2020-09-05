import React, { useState, useEffect, useContext } from 'react';
import EditExercise from "./Modal/EditExercise"
import NewPost from "./Modal/NewPost"
import EditProfile from "./Modal/EditProfile"
import Post from "./Post"
import { AuthContext } from "./components/Layout"
import { ContextProvider } from "./Context"



function Home() {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useContext(AuthContext)
  console.log(user)
  console.log("Homeです")
  return (
    <>
      {openNew && <NewPost closed={setOpenNew} />}
      {openExercise && <EditExercise closed={setOpenExercise} />}
      {openProfile && <EditProfile closed={setOpenProfile} />}
      <h1>{user.email}</h1>
      <h1>{user.displayName}</h1>
      <button onClick={() => { setOpenNew(true) }}>new post</button>
      <button onClick={() => { setOpenExercise(true) }}>edit exercise</button>
      <button onClick={() => { setOpenProfile(true) }}>edit profile</button>
      <h2>today's post</h2>
      <Post />
    </>
  );
}

export default Home;
