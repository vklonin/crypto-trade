import React from 'react';

export const TradeHistory = ({ history }) => (
  <div className="mt-4">
    <div className="text-sm font-semibold mb-2">Trading History</div>
    <div className="space-y-2 max-h-40 overflow-y-auto">
      {history.map((trade, index) => (
        <div 
          key={index}
          className={`text-sm p-2 rounded ${
            trade.type === 'BUY' ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          {trade.timestamp} - {trade.type}: {trade.amount} BTC at ${trade.price.toFixed(2)}
        </div>
      ))}
    </div>
  </div>
);
