import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './components/ui/card';
import { TradingChart } from './components/TradingChart';
import { TradeHistory } from './components/TradeHistory';
import { TradingControls } from './components/TradingControls';
import { simulatePrice } from './utils/priceSimulator';

const App = () => {
  const [balance, setBalance] = useState(10000);
  const [btcPrice, setBtcPrice] = useState(45000);
  const [btcAmount, setBtcAmount] = useState(0);
  const [history, setHistory] = useState([]);
  const [priceHistory, setPriceHistory] = useState([
    { time: new Date().toLocaleTimeString(), price: 45000 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = simulatePrice(btcPrice);
      setBtcPrice(newPrice);
      setPriceHistory(prev => [
        ...prev.slice(-19),
        { time: new Date().toLocaleTimeString(), price: newPrice }
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, [btcPrice]);

  const buyBTC = () => {
    const amount = 0.1;
    const cost = amount * btcPrice;
    if (cost <= balance) {
      setBalance(prev => prev - cost);
      setBtcAmount(prev => prev + amount);
      setHistory(prev => [...prev, {
        type: 'BUY',
        amount,
        price: btcPrice,
        total: cost,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  const sellBTC = () => {
    const amount = 0.1;
    if (amount <= btcAmount) {
      const earnings = amount * btcPrice;
      setBalance(prev => prev + earnings);
      setBtcAmount(prev => prev - amount);
      setHistory(prev => [...prev, {
        type: 'SELL',
        amount,
        price: btcPrice,
        total: earnings,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-2xl font-bold text-center">Trading Simulator</div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <div className="text-sm text-gray-500">Balance</div>
              <div className="font-bold">${balance.toFixed(2)}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">BTC Amount</div>
              <div className="font-bold">{btcAmount.toFixed(4)} BTC</div>
            </div>
          </div>

          <div className="text-center py-4">
            <div className="text-sm text-gray-500">Current BTC Price</div>
            <div className="text-2xl font-bold">${btcPrice.toFixed(2)}</div>
            <TradingChart priceHistory={priceHistory} />
          </div>

          <TradingControls onBuy={buyBTC} onSell={sellBTC} />
          <TradeHistory history={history} />
        </div>
      </CardContent>
    </Card>
  );
};

export default App;
