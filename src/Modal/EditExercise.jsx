import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../components/Layout"
import firebase from "../firebase"


function EditExercise(props) {
  const [user, setUser] = useContext(AuthContext);
  const [myExercise, setMyExercise] = useState([])
  const [newMenu, setNewMenu] = useState("")

  useEffect(() => {
    firebase.firestore().collection("user")
      .onSnapshot((snapshot) => {
        let getUser = snapshot.docs.map((doc) => {
          console.log(doc.id)
          if (doc.id === user.uid) {
            return doc.data();
          }
        });
        console.log(getUser)
        console.log(getUser[0].exercise)
        setMyExercise(getUser[0].exercise)
      });

  }, [])


  const exerciseAdd = (e) => {
    firebase.firestore().collection("user").doc(user.uid).set({
      exercises: [
        ...myExercise,
        newMenu
      ],
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    setMyExercise([
      ...myExercise,
      newMenu
    ])
    setNewMenu("")
  }

  const exerciseDelete = (index) => {
    setMyExercise(myExercise.slice(0, index))
    firebase.firestore.collection("user").add({
      exercises: [
        ...myExercise
      ],
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  console.log(myExercise)
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>my exercise</h1>
      <div>
        <ul>
          {myExercise.map((menu, index) =>
            <li key={index}>{menu}<button onClick={() => exerciseDelete(index)}>×</button></li>
          )}
        </ul>
        <input type="text" value={newMenu} onChange={(e) => setNewMenu(e.target.value)} />
        <button onClick={exerciseAdd}> 追加</button>
      </div>
    </div>
  );
}

export default EditExercise;
