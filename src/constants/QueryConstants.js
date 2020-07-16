export const getMetricOptionsQuery = `query {getMetrics}`

export const getMeasurementsQuery = `query {getMultipleMeasurements(input: <<input>>) 
        {  metric
            measurements{
            metric
            at
            value
            unit
           }
        }
    } `
