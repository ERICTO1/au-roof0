import React, { useEffect, useRef, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { MetricData, GlobeRef } from '../types';

interface SolarGlobeProps {
  activeData: MetricData;
  allData: MetricData[];
}

const SolarGlobe: React.FC<SolarGlobeProps> = ({ activeData, allData }) => {
  const globeEl = useRef<GlobeRef>(null);

  // Focus camera when activeData changes
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: activeData.coords.lat,
        lng: activeData.coords.lng,
        altitude: activeData.altitude
      }, 1500);
    }
  }, [activeData]);

  useEffect(() => {
    if (globeEl.current) {
        const controls = globeEl.current.controls();
        if(controls) {
            controls.enableZoom = false;
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5; 
        }
    }
  }, []);

  const ringsData = useMemo(() => {
    return [activeData];
  }, [activeData]);

  return (
    <div className="absolute inset-0 z-0">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor="rgba(0,0,0,0)"
        
        // Rings - Crisp Gold
        ringsData={ringsData}
        ringLat={(d: any) => d.coords.lat}
        ringLng={(d: any) => d.coords.lng}
        ringColor={() => '#f59e0b'}
        ringMaxRadius={8}
        ringPropagationSpeed={2}
        ringRepeatPeriod={800}

        // Labels
        labelsData={allData}
        labelLat={(d: any) => d.coords.lat}
        labelLng={(d: any) => d.coords.lng}
        labelText={(d: any) => d.city}
        labelSize={(d: any) => d.id === activeData.id ? 2 : 0.5}
        labelDotRadius={(d: any) => d.id === activeData.id ? 1 : 0.3}
        labelColor={(d: any) => d.id === activeData.id ? '#1e293b' : 'rgba(100, 116, 139, 0.5)'} // Dark Slate vs Faded Blue-Gray
        labelResolution={2}
        labelAltitude={0.01}
        // labelTypeFace removed to fix crash

        // Atmosphere - Subtle Gold/White
        atmosphereColor="#fbbf24" 
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default SolarGlobe;