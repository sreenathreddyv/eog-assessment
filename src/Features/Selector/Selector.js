import React, { useEffect, useState } from 'react';
import {getMetricOptionsQuery} from '../../constants/QueryConstants'
import { graphqlAPIHandler } from '../../utils/apiUtils';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {path} from '../../constants/CommonConstants.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    padding: 16,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));  
const Selector = (props) => {

  const [metricOptions, setMetricOptions] = useState([]);
  const classes = useStyles();

  useEffect (() =>{
    getMetricOptions();
  },[])
   

  const getMetricOptions = async() => {
    let query =  getMetricOptionsQuery;
    let res = await graphqlAPIHandler(path, query);
    setMetricOptions(res.getMetrics)
  }

  
    return (
      <div className={classes.root}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={metricOptions}
          getOptionLabel={(option) => option}
          onChange = {props.setMeasurements}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="select..."
            />
          )}
        />
      </div>
    );
  }

export default Selector;
