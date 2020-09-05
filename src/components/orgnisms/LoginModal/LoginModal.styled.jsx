import styled from 'styled-components'

const StyledLoginModal = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #ccc;
    .modal_box {
        width: 80%;
        background-color: #fff;
        padding: 15px;
        border-radius: 15px;
        h1 {
            text-align: center;
        }
        form {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            p {
                margin: 5px;
            }
            button {
                margin: 5px;
            }
        }
    }
`

export default StyledLoginModal;

