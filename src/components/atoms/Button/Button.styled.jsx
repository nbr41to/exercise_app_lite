import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: ${props => props.color};
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    width:100%;
    padding: 17px;
`

export default StyledButton; 