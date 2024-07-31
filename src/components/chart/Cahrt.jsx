import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Cahrt = ({ title, data, dataKey, grid, pv }) => {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {grid && <CartesianGrid strokeDasharray="5 5" />}
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <YAxis />
                    <Tooltip />

                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey={pv} stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Cahrt