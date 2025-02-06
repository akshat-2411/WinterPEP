import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchWithParams = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [resourceType]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setResourceType('posts')}>Get Posts</button>
            <button onClick={() => setResourceType('comments')}>Get Comments</button>
            <button onClick={() => setResourceType('users')}>Get Users</button>
            <h1>{resourceType.toUpperCase()}</h1>
            <ul style={{ textAlign: 'left', margin: '0 auto', width: '50%' }}>
                {items.slice(0, 5).map((item, index) => (
                    <li key={item.id || index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchWithParams;
