import styled from 'styled-components'

export const StyledComponents = styled.header`
    background-color: limegreen;
    color: white;
    height: 60px;
    /* display: flex;
    justify-content: center;
    align-items: center; */

    h1 {
        font-size: 2.4rem;
        font-weight: bold;
        padding: 1rem 2rem;
        text-align: center;
        line-height: 4rem;
    }
    button {
        float: right;
        width: 50px;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        svg {
            width: 100%;
            height: 100%;
            color: white;
        }
    }

`