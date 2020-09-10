import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 1.6rem;
    font-weight: bold;
    color: #fff;
    background-color: ${props => props.color};
    text-align: center;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    width: 200px;
    padding: 1.5rem;
    margin: 1.2rem;
`

export default StyledButton; 