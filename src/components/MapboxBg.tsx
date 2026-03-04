"use client";

import { useCallback } from "react";
import Map from "react-map-gl/mapbox";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MONTERREY = { longitude: -100.3161, latitude: 25.6866, zoom: 11 };

export default function MapboxBg() {
  const onLoad = useCallback((e: { target: mapboxgl.Map }) => {
    const map = e.target;
    const hideLabels = () => {
      if (!map.isStyleLoaded()) return;
      for (const layer of map.getStyle().layers ?? []) {
        if (layer.type === "symbol") {
          try { map.setLayoutProperty(layer.id, "visibility", "none"); } catch {}
        }
      }
    };
    hideLabels();
    map.on("styledata", hideLabels);
    map.on("idle", hideLabels);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Map
        mapStyle="mapbox://styles/edgargutgzz/climactgb00cn01qw7amo9bbd"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={MONTERREY}
        onLoad={onLoad}
        interactive={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
