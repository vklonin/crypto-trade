
// src/components/TradingChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const TradingChart = ({ priceHistory }) => (
  <div className="mt-4 h-64">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={priceHistory}>
        <XAxis dataKey="time" />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

