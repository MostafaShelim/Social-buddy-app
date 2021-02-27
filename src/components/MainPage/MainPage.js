import React from 'react';
import { useState, useEffect } from 'react';
import User from '../User/User';

const MainPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    const mainPageStyle = {
        backgroundColor: '#333',
        color: 'white'
    }
    return (
        <div style = {mainPageStyle}>
            {
                users.map(data => <User key={data.id} userData = {data}></User>)
            }
        </div>
    );
};

export default MainPage;