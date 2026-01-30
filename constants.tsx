import { MetricData } from './types';

// Central focus point for Australia to start
export const INITIAL_VIEW = { lat: -25.2744, lng: 133.7751, altitude: 2.5 };

export const SOLAR_METRICS: MetricData[] = [
  {
    id: 'intro',
    title: 'SOLAR NODES MAP',
    city: 'Australia',
    value: 'AUD $4.2B',
    subValue: 'Total Network Value',
    description: 'Explore the decentralized energy grid. Scroll to analyze the highest yielding nodes across the continent.',
    coords: { lat: -25.2744, lng: 133.7751 },
    altitude: 1.8,
    icon: 'activity'
  },
  {
    id: 'payback',
    title: 'Shortest Payback Period',
    city: 'Perth, WA',
    value: '3.2 Years',
    subValue: 'ROI Velocity: High',
    description: 'With over 3,200 hours of sunshine annually and high energy tariffs, Perth offers the fastest liquidity event for solar hardware investments.',
    coords: { lat: -31.9505, lng: 115.8605 },
    altitude: 0.6,
    icon: 'clock'
  },
  {
    id: 'yield',
    title: 'Highest Annual Yield',
    city: 'Darwin, NT',
    value: '$2,450 / yr',
    subValue: 'APRO: 18.5%',
    description: 'Tropical latitude maximizes irradiance. Darwin nodes generate the highest raw financial yield per installed kW capacity.',
    coords: { lat: -12.4634, lng: 130.8456 },
    altitude: 0.6,
    icon: 'trending-up'
  },
  {
    id: 'efficiency',
    title: 'Peak Generation Efficiency',
    city: 'Brisbane, QLD',
    value: '4.8 kWh/kW',
    subValue: 'Daily Output',
    description: 'The "Sunshine State" capital maintains optimal operating temperatures, ensuring hardware runs at peak hashing... I mean, generating power.',
    coords: { lat: -27.4698, lng: 153.0251 },
    altitude: 0.6,
    icon: 'zap'
  },
  {
    id: 'entry',
    title: 'Lowest Entry Barrier',
    city: 'Adelaide, SA',
    value: '$0.88 / Watt',
    subValue: 'Max Subsidies',
    description: 'Aggressive government rebates and competitive installation markets create the lowest CAPEX requirement for new node validators.',
    coords: { lat: -34.9285, lng: 138.6007 },
    altitude: 0.6,
    icon: 'wallet'
  },
  {
    id: 'consumption',
    title: 'Max Energy Throughput',
    city: 'Sydney, NSW',
    value: '7,200 kWh',
    subValue: 'Avg Annual Demand',
    description: 'High AC usage and large property footprints drive massive self-consumption rates, minimizing low-value grid exports.',
    coords: { lat: -33.8688, lng: 151.2093 },
    altitude: 0.5,
    icon: 'activity'
  },
  {
    id: 'area',
    title: 'Largest Surface Area',
    city: 'Melbourne, VIC',
    value: '240 sqm',
    subValue: 'Avg Roof Size',
    description: 'Urban sprawl results in massive rooftop real estate available for array expansion and maximum scale deployment.',
    coords: { lat: -37.8136, lng: 144.9631 },
    altitude: 0.5,
    icon: 'home'
  },
  {
    id: 'asset',
    title: 'Highest Asset Premium',
    city: 'Canberra, ACT',
    value: '+4.2% Prop Val',
    subValue: 'Green Premium',
    description: 'Properties with upgraded solar infrastructure command the highest valuation premium in the resale market.',
    coords: { lat: -35.2809, lng: 149.1300 },
    altitude: 0.6,
    icon: 'gem'
  }
];
