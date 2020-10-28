import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetching() {

    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    const [onClickIdChange, setOnClickIdChange] = useState(1);

    const handleClick = () => {
        setOnClickIdChange(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${onClickIdChange}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[onClickIdChange])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Data</button>
                {posts.title}
           {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
           </ul>*/}
        </div>
    )
}

export default DataFetching
