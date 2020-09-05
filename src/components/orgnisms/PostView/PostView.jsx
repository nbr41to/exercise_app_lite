import React from 'react';
import Post from "../../molecules/Post"
import StylePostView from "./PostView.styled"

export default function PostView({
    value,
    labelTitle,
    type,
    name,
    placeholder,
    autoComplete,
    label,
    onChange
}) {

    return (
        <StylePostView>
            <Post />
        </StylePostView>
    );
}

