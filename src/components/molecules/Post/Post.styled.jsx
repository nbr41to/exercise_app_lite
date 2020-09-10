import styled from 'styled-components'

const StyledComponent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: lightblue;
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 2rem;
    margin: 1rem;
    box-shadow: 3px 3px 1px 1px;

    .user-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        image {
            width: 8rem;
            height: 8rem;
            border-radius: 100%;
        }
        p {
            font-size: 1.2rem;
            font-weight: bold;
        }
        .delete {
            background-color: #ccc;
            padding: 0.5rem;
            border: 1px solid #444;
            border-radius: 5px;
            margin: 1rem;
        }
    }
    .post-info {
        ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            background-color: white;
            box-shadow: 1px 1px 2px 0;
            h2 {
                width: 100%;
                font-size: 1.4rem;
                font-weight: bold;
                text-align: center;
                padding: 0.5rem 1rem;
                /* border: 1px solid #444; */
                background-color: limegreen;
                color: white;
            }
            li {
                font-size: 1.4rem;
                margin: 0.5rem;
                &:before {
                    content: '＊';
                    margin-right: 5px;
                }
            }
        }
        .comment {
            font-size: 1.6rem;
            text-align: left;
        }
        .nice-button {
            background-color: white;
            font-size: 1.2rem;
            padding: 0.8rem;
            border: 1px solid #444;
            border-radius: 1rem;
            &:disabled {
                color: white;
                border: none;
                background-color: tomato;
            }
        }
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .time {
                font-size: 0.8rem;
            }
        }
    }
    

`

export default StyledComponent;

