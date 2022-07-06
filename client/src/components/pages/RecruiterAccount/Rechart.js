
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';



function Rechart() {

    
const data = [
    {
      date: `may, 24`,
      pageview: 6.0,
      price: 4.0
    },
    {
      date: `${new Date().getMonth() +1}/${new Date().getDate() -3}/${new Date().getFullYear()}`,
      pageview: 9.0,
      price: 1.000,
    },
    {
      date: `${new Date().getMonth() +1}/${new Date().getDate() -2}/${new Date().getFullYear()}`,
      pageview: 5.0,
      price: 4.000,
    },
    {
      date: `${new Date().getMonth() +1}/${new Date().getDate() -1}/${new Date().getFullYear()}`,
      pageview: 1.0,
      price: 8.00,
    },
    {
      date: new Date().toLocaleDateString('en-US'),
      pageview: 6.0,
      price: 5,
    },
  ];
  return (
    <>
      <h4 color="#ffffff">daily page view/applicantions</h4>
      <ResponsiveContainer width="90%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="" vertical="" />
        <XAxis dataKey="date" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="price" stroke="#76c80E" strokeWidth="2" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        <Line type="monotone" dataKey="pageview" stroke="#1FBBA6" strokeWidth="2"  />
        
      </LineChart>
    </ResponsiveContainer>
  </>
  );
}

export default Rechart;