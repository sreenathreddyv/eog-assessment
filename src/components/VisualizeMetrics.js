import React, {useState} from 'react';
import Selector from '../Features/Selector/Selector'
import LineChart from '../Features/Chart/LineChart'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   root: {
     width: 250,
     padding: 16,
   },
   title: {
     fontSize: 14,
   },
 });
const VisualizeMetrics = () => {
   const [measurements, setMeasurements] = useState([])
   const classes = useStyles()
   
const getMeasurements =(event, values)=>{
   setMeasurements(values)
}
   return(
     <div className = "visualize-metrics">
        <Selector setMeasurements = {getMeasurements}/>
       { measurements.length ?
       
        <LineChart measurements = {measurements}/>
        :
        <div></div>
       }
      </div> 
   )

};

export default VisualizeMetrics 