import React from 'react'
import { StyledComponents } from "./Header.styled"
import Button from "../atoms/Button"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logout from '../svg/logout.svg'

const Header = ({ user, signout }) => {
    return (
        <StyledComponents>
            {user &&
                <button onClick={signout}>
                    <ExitToAppIcon />
                    <p>Logout</p>
                </button>}
            <h1>Exercise Share App</h1>
        </StyledComponents>
    )
}

export default Header