import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
const UserDetails = () => {
    const {userId} = useParams();

    //post details here
    const [data, setData] = useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    }, {});
    const {id, title, body} = data;
    // console.log(data);
    const classes = useStyles();

    const userDetailsStyle = {
      margin: '10px',
      padding: '5px',
      border: '1px solid purple',
      backgroundColor: '#666'
    }
    return (
        // 
        //     {/* <h3>User Details</h3>
        //     <p><strong>Id No:</strong> {id}</p>
        //     <p><strong>User Title:</strong> {title}</p>
        //     <p><strong>Description: </strong>{body}</p> */}

        // 
        <div style = {userDetailsStyle}>
          <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                  User Details
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  User Id: {id}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Title:</strong> {title}
                  <br />
                  {body}
                </Typography>
            </CardContent>
          </Card>
          <Comments userId = {userId}></Comments>
      </div>
    );
};

export default UserDetails;