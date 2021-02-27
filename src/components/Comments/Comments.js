import React, { useEffect, useState } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comments = ({userId}) => {

    const [comments, setComments] = useState([]);
    useEffect(()=>{
      const url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`;
      fetch(url)
      .then(res => res.json())
      .then(data => setComments(data));
    },[]);

    //hard coded images object
    const images = [
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6Xj5zSLLgiSwCTLU0toHjAHaFR%26pid%3DApi&f=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6wcwdOP2CFJNwYQgakPsdgHaE8%26pid%3DApi&f=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RiaEMjLzGzZ1zzvZHmTtUgHaL5%26pid%3DApi&f=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IolAmWdsFHkX4pYktlxy2wHaEK%26pid%3DApi&f=1',
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.lHUNj7EL2l5L5WBWrWJlLA%26pid%3DApi&f=1'
    ];

    return (
        <div>
            <h3 style = {{color: 'white'}}>Comments</h3>
             {
                 comments.map((cmt, idx) => 
                    <CommentDetails img = {images[idx]} comment = {cmt}>
                    </CommentDetails>)
             }
        </div>
    );
};

export default Comments;