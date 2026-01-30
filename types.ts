export interface GeoCoords {
  lat: number;
  lng: number;
}

export interface MetricData {
  id: string;
  title: string;
  city: string;
  value: string;
  subValue: string;
  description: string;
  coords: GeoCoords;
  icon: 'clock' | 'trending-up' | 'zap' | 'wallet' | 'activity' | 'home' | 'gem';
  altitude: number; // Zoom level for the globe
}

export interface GlobeRef {
  pointOfView: (coords: { lat: number; lng: number; altitude: number }, duration?: number) => void;
  controls: () => any;
}