// Fetching data with useReducer Part 1
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function UseReducerDataFetch() {

    const [loading, setLoding] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoding(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoding(false)
            setPost('')
            setError('Something went wrong!')
        })
    }, [])

    return (
        <div>
            {loading ? 'Loading...' : `${post.title}`}
            {error ? 'Something went wrong!' : null}
        </div>
    )
}

export default UseReducerDataFetch
