import React from 'react';
import { 
    ResponsiveContainer, 
    AreaChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Area,  
} from "recharts";


const Chart = ({ loading, forecast }) => {
    const {name, country, list} = forecast;
    return (
        <div>
            {loading && <p> is loading...</p>}
            <h1> 5 day forecast for {name}, {country}: </h1>
            <ResponsiveContainer width="100%" height={400} fontSize={11} >
                <AreaChart data={list} margin={{top: 10,right: 30,left: 30,bottom: 10,}}>
                    <XAxis dataKey="dateTime" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="temp" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;