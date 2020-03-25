import React from "react";
import fs from "fs";

const Post = () => {
    return (
        <div>Hello</div>
    )
};

export const getStaticPaths = async () => {

    const files = fs.readdirSync('post');

    return {
        paths: [],
        fallback: false
    }
}

export default Post