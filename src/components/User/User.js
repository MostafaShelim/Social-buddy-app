import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      textDecoration: 'none'
    },
  });

const User = (props) => {
    const classes = useStyles();
    // console.log(props.User);
    const{id, title, body} = props.userData;
    const userStyle = {
        padding: '10px',
        border: '1px solid gray',
        margin: '10px 100px',
    }
    return (
        <div style = {userStyle}>
            <h2>User No : {id}</h2>
            <p><strong>Title</strong>: {title}</p>
            <p><strong>Status</strong>: {body}</p>
            <Link  style={{textDecoration: 'none'}} to={'/user/'+id}>
                <Button className={classes.root}>See Details</Button>
            </Link>
        </div>
    );
};

export default User;