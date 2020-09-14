import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../../Layout"
import firebase from "../../../../firebase"
import StyledComponent from "./EditExercise.styled"


function EditExercise(props) {
  const [user, setUser] = useContext(AuthContext);
  const [myExercise, setMyExercise] = useState([])
  const [newMenu, setNewMenu] = useState("")

  useEffect(() => {
    let getExercises = []
    // ユーザのエクササイズを取得
    const docRef = firebase.firestore().collection("user").doc(user.id)
    docRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data()

        console.log("Document data:", data.exercises);
        getExercises = data.exercises
      } else {
        console.log("No such document!");
        // ユーザのDocがなかった場合新規作成する
        firebase.firestore().collection("user").doc(user.id).set({
          exercises: [],
        })
          .then(() => {
            console.log("create new doc");
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      }
      setMyExercise(getExercises)
    }).catch(function (error) {
      console.log("Error getting document:", error);
    })
  }, [])


  const exerciseAdd = (e) => {
    if (newMenu) {
      firebase.firestore().collection("user").doc(user.id).update({
        exercises: [
          ...myExercise,
          newMenu
        ],
      })
        .then(() => {
          console.log("Document written success");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setMyExercise([
        ...myExercise,
        newMenu
      ])
      setNewMenu("")
    }
  }

  const exerciseDelete = (index) => {
    const key = index
    const newExercise = myExercise.filter((_, index) => index !== key)
    console.log(newExercise)
    firebase.firestore().collection("user").doc(user.id).update({
      exercises: newExercise,
    })
      .then(() => {
        console.log("Document deleted success");
        setMyExercise(newExercise)
      })
      .catch((error) => {
        console.error("Error dalete document: ", error);
      });
  }

  console.log(myExercise)
  return (
    <StyledComponent>
      <div className="modal_box">
        <button className="close-button" onClick={() => { props.closed(false) }}>×</button>
        <h2>My exercise edit</h2>
        <div className="exercises">
          <ul>
            {myExercise.map((menu, index) =>
              <li key={index}>{menu}<button onClick={() => exerciseDelete(index)}>×</button></li>
            )}
          </ul>
          <input type="text" value={newMenu} onChange={(e) => setNewMenu(e.target.value)} />
          <button className="add-button" onClick={exerciseAdd}> 追加</button>
        </div>
      </div>
    </StyledComponent>
  );
}

export default EditExercise;
