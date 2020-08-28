import React, { useContext } from 'react';
import { Context } from "./Context"


function TopView() {
    const { currentUser, users } = useContext(Context);
    return <h1>Welcome!! {users[currentUser].name}</h1>
}

export default TopView;
