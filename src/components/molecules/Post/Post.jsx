import React from 'react';
import InputLabel from "../../atoms/InputLabel"
import InputText from "../../atoms/InputText"
import StylePost from "./Post.styled"

export default function Post({
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
        <StylePost>
            <img src="#" />
            <div>
                <p>use_name</p>
                <p>今日のメニュー1</p>
            </div>
        </StylePost>
    );
}

