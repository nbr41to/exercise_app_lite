import React, { useState, useEffect, useContext } from 'react';
// import AuthProvider, { AuthContext } from './Auth'
import Home from "./Home"
import Layout, { AuthContext } from "./components/Layout"



const App = () => {
  const [openNew, setOpenNew] = useState(false);
  const [openExercise, setOpenExercise] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [user, setUser] = useContext(AuthContext)
  console.log("Appです")
  return (
    // <AuthProvider >
    <Layout>
      <Home />
    </Layout>
    // </AuthProvider>
  );
}

export default App;
