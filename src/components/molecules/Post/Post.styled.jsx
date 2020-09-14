import styled from 'styled-components'

const StyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    padding: 1rem;
    border: 1px solid #444;
    border-radius: 2rem;
    margin: 1rem;
    box-shadow: 3px 3px 1px 1px;

    .user-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 90%;
        border-bottom: 1px solid #444;
        padding-bottom: 1rem;
        img {
            width: 5rem;
            height: 5rem;
            border-radius: 100%;
        }
        p {
            font-size: 1.4rem;
            font-weight: bold;
            padding: 1rem;
        }
    }
    .post-info {
        width:90%;
        padding: 1rem;
        ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            background-color: white;
            box-shadow: 1px 1px 2px 0;
            padding-bottom: 1rem;
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
                margin: 0.5rem 1rem;
                &:before {
                    content: '＊';
                    margin-right: 5px;
                }
            }
        }
        .comment {
            font-size: 1.6rem;
            text-align: left;
            padding: 1rem 0;
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
        .delete {
            display: block;
            background-color: #ccc;
            font-size: 1.2rem;
            padding: 0.8rem;
            border: 1px solid #444;
            border-radius: 5px;
            margin: 1rem auto 0;
        }
    }
    

`

export default StyledComponent;

