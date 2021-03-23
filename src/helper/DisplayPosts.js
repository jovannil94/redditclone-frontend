import React, { useState, useEffect } from "react";
import axios from "axios";
import PostIndex from "./PostIndex";
import getAPI from "../util/getAPI";

const DisplayPost = (props) => {
    const [allPost, setAllPost] = useState([]);
    const API = getAPI();
    
    const fetchPosts = async (choosen) => {
        try {
            if(Number.isInteger(choosen) === true) {
                let res = await axios.get(`${API}/posts/${choosen}`);
                setAllPost(res.data.payload);
            } else {
                let res = await axios.get(`${API}/posts/`);
                setAllPost(res.data.payload);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts(props.choosen);
    }, [props])

    return(
        <div className="postFeed">
            <PostIndex allPost={allPost}/>
        </div>
    )

}

export default DisplayPost;