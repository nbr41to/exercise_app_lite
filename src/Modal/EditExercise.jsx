import React, { useContext, useState } from 'react';
import { Context } from "../Context"

function EditExercise(props) {
  const { currentUser, users, setUsers } = useContext(Context);
  const changed_users = { ...users }
  const [newMenu, setNewMenu] = useState("")
  const exerciseChange = (e) => {
    setNewMenu(e.target.value)
  }
  const exerciseAdd = (e) => {
    changed_users[currentUser].exercise.push(newMenu)
    setUsers(changed_users)
    setNewMenu("")
  }
  const exerciseDelete = (index) => {
    const key = index
    changed_users[currentUser].exercise = changed_users[currentUser].exercise.filter((item, index) => index !== key)
    console.log(changed_users[currentUser].exercise)
    setUsers(changed_users)
  }

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: "#eee", position: "fixed", zIndex: 10 }}>
      <button onClick={() => { props.closed(false) }}>×</button>
      <h1>my exercise</h1>
      <div>
        <ul>
          {users[currentUser].exercise.map((menu, index) =>
            <li key={index}>{menu}<button onClick={() => exerciseDelete(index)}>×</button></li>
          )}
        </ul>
        <input type="text" value={newMenu} onChange={exerciseChange} />
        <button onClick={exerciseAdd}> 追加</button>
      </div>
    </div>
  );
}

export default EditExercise;
