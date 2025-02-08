import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

export const TradingControls = ({ onBuy, onSell }) => (
  <div className="flex gap-4 justify-center">
    <Button onClick={onBuy} className="bg-green-500 hover:bg-green-600">
      <ArrowUp className="mr-2 h-4 w-4" />
      Buy 0.1 BTC
    </Button>
    <Button onClick={onSell} className="bg-red-500 hover:bg-red-600">
      <ArrowDown className="mr-2 h-4 w-4" />
      Sell 0.1 BTC
    </Button>
  </div>
);
