import React, { useState, useEffect, useContext } from 'react';
import EditExercise from "./Modal/EditExercise"
import NewPost from "./Modal/NewPost"
import EditProfile from "./Modal/EditProfile"
import Post from "./Post"
import Home from "./Home"
import Layout, { AuthContext } from "./components/Layout"
import { ContextProvider } from "./Context"



function App() {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useContext(AuthContext)
  console.log("Appです")
  return (
    <ContextProvider >
      <Layout>
        <Home />
      </Layout>
    </ContextProvider>
  );
}

export default App;
