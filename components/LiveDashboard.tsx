import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Activity, Wifi, Server, Database } from 'lucide-react';

// Simulation helpers
const formatPrice = (price: number) => price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
const getRandomFluctuation = (current: number) => current * (1 + (Math.random() * 0.002 - 0.001)); // +/- 0.1%

const LiveDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState({
    btc: 96450.20,
    eth: 3450.80,
    sol: 185.45,
    cpu: 12,
    latency: 24,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        btc: getRandomFluctuation(prev.btc),
        eth: getRandomFluctuation(prev.eth),
        sol: getRandomFluctuation(prev.sol),
        cpu: Math.floor(Math.random() * (35 - 10) + 10), // Random CPU betwen 10-35%
        latency: Math.floor(Math.random() * (45 - 20) + 20), // Random latency
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black/80 border-y border-white/10 backdrop-blur-md overflow-hidden z-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Simple Scrolling Ticker */}
        <div className="md:hidden py-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="inline-flex space-x-6 animate-marquee">
            <MetricItem label="BTC/USD" value={metrics.btc} isCurrency />
            <MetricItem label="ETH/USD" value={metrics.eth} isCurrency />
            <MetricItem label="SOL/USD" value={metrics.sol} isCurrency />
            <span className="text-gray-600">|</span>
            <div className="inline-flex items-center space-x-2 text-gray-400 font-mono text-xs">
                 <Activity size={12} className="text-green-500" />
                 <span>SYSTEM: ONLINE</span>
            </div>
          </div>
        </div>

        {/* Desktop: Full Dashboard Grid */}
        <div className="hidden md:grid grid-cols-6 gap-4 py-4 divide-x divide-white/10">
            
            {/* Market Data */}
            <div className="col-span-3 flex justify-around items-center px-4">
                <MetricItem label="BTC" value={metrics.btc} isCurrency />
                <MetricItem label="ETH" value={metrics.eth} isCurrency />
                <MetricItem label="SOL" value={metrics.sol} isCurrency />
            </div>

            {/* System Stats */}
            <div className="col-span-3 flex justify-around items-center px-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg">
                        <Activity size={16} className="text-cyber-primary" />
                    </div>
                    <div>
                        <span className="block text-[10px] text-gray-500 font-mono uppercase">AI Latency</span>
                        <span className="text-sm font-mono text-white">{metrics.latency}ms</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                     <div className="p-2 bg-white/5 rounded-lg">
                        <Server size={16} className="text-cyber-secondary" />
                    </div>
                    <div>
                        <span className="block text-[10px] text-gray-500 font-mono uppercase">Node Load</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-green-500 to-yellow-500 transition-all duration-500"
                                    style={{ width: `${metrics.cpu}%` }}
                                ></div>
                            </div>
                            <span className="text-xs font-mono text-white">{metrics.cpu}%</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                     <div className="p-2 bg-white/5 rounded-lg">
                        <Database size={16} className="text-blue-500" />
                    </div>
                    <div>
                        <span className="block text-[10px] text-gray-500 font-mono uppercase">Data Stream</span>
                        <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Active
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

const MetricItem = ({ label, value, isCurrency = false }: { label: string, value: number, isCurrency?: boolean }) => {
    // Determine color based on pseudo-random trend (just for visual effect)
    const isUp = Math.random() > 0.4; 
    
    return (
        <div className="flex items-center gap-3 min-w-[120px]">
            <div className={`p-1.5 rounded-full ${isUp ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                {isUp ? <TrendingUp size={14} className="text-green-500" /> : <TrendingDown size={14} className="text-red-500" />}
            </div>
            <div>
                <span className="block text-[10px] text-gray-500 font-mono font-bold">{label}</span>
                <span className={`text-sm font-mono font-bold ${isUp ? 'text-white' : 'text-gray-300'}`}>
                    {isCurrency ? formatPrice(value) : value}
                </span>
            </div>
        </div>
    );
}

export default LiveDashboard;