import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const FetchWithAxios = () => {
    const [resourceType, setResourceType] = useState('posts')
        const [items, setItems] = useState([])
        useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
                .then(response => setItems(response.data))
                .catch(error => console.log(error))
        }, [resourceType])
    return (
        <div>
            <button onClick={() => setResourceType('posts')}>Get Posts</button>
            <button onClick={() => setResourceType('comments')}>Get Comments</button>
            <button onClick={() => setResourceType('users')}>Get Users</button>
            <h1>{resourceType}</h1>
            <u1>
                {items.map((item) => (
                    <li>{JSON.stringify(item)}</li>
                ))}
            </u1>
        </div>
    );
}

export default FetchWithAxios