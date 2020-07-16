import React, {useEffect, useState} from 'react';
import Chart from "react-apexcharts"
import {getMeasurementsQuery} from '../../constants/QueryConstants'
import { graphqlAPIHandler } from '../../utils/apiUtils';
import {path} from '../../constants/CommonConstants.js'
import RealTimeData from '../RealTimeData/RealTimeData';

const LineChart = (props) => {

    const [series, setSeries] = useState([])

    let options = {
        chart: {
          height: 380,
          width: "100%"
        },
        xaxis: {
          type: "datetime"
        }
      };
    
      useEffect(() => {
          if(props.measurements){
        setInterval(() => {
            getMultipleMeasurements();
        }, 1300);
       }}, [props.measurements]);

     const getMultipleMeasurements = async() => {
        let date = new Date(Date.now()-1800000);
        var milliSecondsDate = date.getTime();
         let query = getMeasurementsQuery
         let input =   props.measurements.map(record=>{
             let obj ={}
             obj.metricName = record
             obj.after = milliSecondsDate
             return obj
         })
        let modifiedQuery= query.replace("<<input>>",JSON.stringify(input).replace(new RegExp("\"metricName\"", "g"),"metricName").replace(new RegExp("\"after\"", "g"),"after"))
         let res = await graphqlAPIHandler(path, modifiedQuery);
         if(res){  
             let metricsArray =[]   
            for(let option of res.getMultipleMeasurements){
                let dataSeries = {}
                let dataPoints = [] 
             for(let record of option.measurements){
                dataPoints.push({
                    x: record.at,
                    y: record.value
                });  
                dataSeries.name = record.metric
                dataSeries.data = dataPoints
             }
             metricsArray.push(dataSeries)
            }
            if(metricsArray.length)
             setSeries(metricsArray)
         }
         
     }


      
    
    
    

    return(
        <div>
            {series.map(rec=>{
                return  <RealTimeData  key = {rec.name} data = {rec}/>
            })}
           
            <Chart options={options} series = {series}type="line" height={350} />
            
        </div>
    )
}

export default LineChart;

