import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const FetchResources = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(data => setItems(data))
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
    )
}

export default FetchResources