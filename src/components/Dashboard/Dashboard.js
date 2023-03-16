import React, { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import './Dashboard.css';

const Dashboard = () => {
const [chartData, setChartData] = useState([]);
useEffect(() => {
    fetch("data.json")
    .then((res) => res.json())
    .then((data) => setChartData(data));
}, []);
return (
    <div>
        <h1>This is about Dashboard</h1>
        <div className="chartdiv">
            <AreaChart
                width={600}
                height={400}
                data={chartData}
                margin={{ top: 40, right: 0, left: 0, bottom: 35 }}
            >
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
                />
                <Area
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
                />
            </AreaChart>
            <BarChart width={600} height={400} data={chartData}
            margin={{ top: 40, right: 0, left: 50, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="revenue" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    </div>
);
};

export default Dashboard;
