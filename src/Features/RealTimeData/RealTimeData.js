import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    width: 200,
    marginRight: 30,
    marginBottom: 10,
    float: 'right'
  },
  title: {
    fontSize: 20,
  },
});

const  RealTimeData = (props) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         {props.data.name}
        </Typography>
        <Typography variant="h5" component="h2">
         {props.data.data.pop().y}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RealTimeData;