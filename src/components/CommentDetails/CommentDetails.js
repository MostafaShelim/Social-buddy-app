import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: 'purple'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: 'green'
  },
  pos: {
    marginBottom: 12,
  },
});

const CommentDetails = ({comment, img}) => {
    // console.log(comment);
    // console.log(img);
    const {id, name, email, body} = comment;
    const classes = useStyles();

    const containerStyle = {
        border: '2px solid gray',
    }
    const imgStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
    }

    return (
        <Container style={containerStyle}>
            <Card className={classes.root}>
                <CardContent>
                    <img style = {imgStyle} src={img} alt=""/>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        <strong>Name:</strong> {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Id: {id}
                    </Typography>
                    <Typography variant="body2" component="p">
                        <strong>Email:</strong> {email}
                        <br />
                        <strong>Comment:</strong> {body}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default CommentDetails;