"use client";

import { useState, useEffect } from "react";
import Map, { Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const MAP_STYLE = "mapbox://styles/mapbox/light-v11";
const MONTERREY = { longitude: -100.3161, latitude: 25.6866, zoom: 12.5 };

type LayerId = "metro" | "reportes" | "inseguro" | "seguro";

const LAYER_CONFIG: { id: LayerId; label: string; color: string }[] = [
  { id: "metro", label: "Estaciones de Metro", color: "#3B82F6" },
  { id: "reportes", label: "Reportes 911", color: "#DC2626" },
  { id: "inseguro", label: "Percepción insegura", color: "#7C3AED" },
  { id: "seguro", label: "Percepción segura", color: "#16A34A" },
];

type Point = { lat: number; lng: number; name: string };
type GeoJSON = { type: "FeatureCollection"; features: object[] };

function parseCSV(text: string): Point[] {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).flatMap((line) => {
    const vals = line.split(",").map((v) => v.replace(/["'\t\r]/g, "").trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = vals[i] ?? ""));
    const lat = parseFloat(obj.latitud);
    const lng = parseFloat(obj.longitud);
    if (isNaN(lat) || isNaN(lng)) return [];
    return [{ lat, lng, name: obj.nombre ?? obj.name ?? "" }];
  });
}

function toGeoJSON(points: Point[]): GeoJSON {
  return {
    type: "FeatureCollection",
    features: points.map((p) => ({
      type: "Feature",
      geometry: { type: "Point", coordinates: [p.lng, p.lat] },
      properties: { name: p.name },
    })),
  };
}

const EMPTY: GeoJSON = { type: "FeatureCollection", features: [] };

export default function GeorregiasPage() {
  const [active, setActive] = useState<Record<LayerId, boolean>>({
    metro: true,
    reportes: true,
    inseguro: true,
    seguro: true,
  });

  const [data, setData] = useState<Record<LayerId, GeoJSON>>({
    metro: EMPTY,
    reportes: EMPTY,
    inseguro: EMPTY,
    seguro: EMPTY,
  });

  useEffect(() => {
    const files: { key: LayerId; url: string }[] = [
      { key: "metro", url: "/georregias/estaciones_metro.csv" },
      { key: "reportes", url: "/georregias/reportes.csv" },
      { key: "inseguro", url: "/georregias/percepciones.csv" },
      { key: "seguro", url: "/georregias/percepciones_seguro.csv" },
    ];
    files.forEach(({ key, url }) => {
      fetch(url)
        .then((r) => r.text())
        .then((text) =>
          setData((prev) => ({ ...prev, [key]: toGeoJSON(parseCSV(text)) }))
        );
    });
  }, []);

  const toggle = (id: LayerId) =>
    setActive((prev) => ({ ...prev, [id]: !prev[id] }));

  const vis = (id: LayerId): "visible" | "none" =>
    active[id] ? "visible" : "none";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Map
        mapStyle={MAP_STYLE}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={MONTERREY}
        attributionControl={false}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Metro stations */}
        <Source id="metro" type="geojson" data={data.metro}>
          <Layer
            id="metro-circles"
            type="circle"
            layout={{ visibility: vis("metro") }}
            paint={{
              "circle-color": "#3B82F6",
              "circle-radius": 8,
              "circle-stroke-width": 2,
              "circle-stroke-color": "#fff",
            }}
          />
        </Source>

        {/* Reportes 911 (clustered) */}
        <Source
          id="reportes"
          type="geojson"
          data={data.reportes}
          cluster
          clusterMaxZoom={14}
          clusterRadius={40}
        >
          <Layer
            id="reportes-cluster"
            type="circle"
            filter={["has", "point_count"]}
            layout={{ visibility: vis("reportes") }}
            paint={{
              "circle-color": "#DC2626",
              "circle-radius": [
                "step",
                ["get", "point_count"],
                14, 20,
                18, 100,
                22,
              ],
              "circle-opacity": 0.85,
            }}
          />
          <Layer
            id="reportes-count"
            type="symbol"
            filter={["has", "point_count"]}
            layout={{
              "text-field": "{point_count_abbreviated}",
              "text-size": 11,
              visibility: vis("reportes"),
            }}
            paint={{ "text-color": "#fff" }}
          />
          <Layer
            id="reportes-point"
            type="circle"
            filter={["!", ["has", "point_count"]]}
            layout={{ visibility: vis("reportes") }}
            paint={{
              "circle-color": "#DC2626",
              "circle-radius": 4,
              "circle-opacity": 0.7,
            }}
          />
        </Source>

        {/* Percepciones inseguras */}
        <Source id="inseguro" type="geojson" data={data.inseguro}>
          <Layer
            id="inseguro-circles"
            type="circle"
            layout={{ visibility: vis("inseguro") }}
            paint={{
              "circle-color": "#7C3AED",
              "circle-radius": 7,
              "circle-opacity": 0.8,
              "circle-stroke-width": 1.5,
              "circle-stroke-color": "#fff",
            }}
          />
        </Source>

        {/* Percepciones seguras */}
        <Source id="seguro" type="geojson" data={data.seguro}>
          <Layer
            id="seguro-circles"
            type="circle"
            layout={{ visibility: vis("seguro") }}
            paint={{
              "circle-color": "#16A34A",
              "circle-radius": 7,
              "circle-opacity": 0.8,
              "circle-stroke-width": 1.5,
              "circle-stroke-color": "#fff",
            }}
          />
        </Source>
      </Map>

      {/* Control panel */}
      <div className="absolute bottom-8 left-4 bg-white rounded-xl shadow-lg p-4 w-56">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
          Territoria
        </p>
        <p className="text-xs text-gray-500 mb-4 leading-snug">
          Seguridad urbana para mujeres en Monterrey
        </p>
        <div className="space-y-3">
          {LAYER_CONFIG.map(({ id, label, color }) => (
            <button
              key={id}
              onClick={() => toggle(id)}
              className="flex items-center gap-3 w-full text-left group"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0 transition-opacity duration-200"
                style={{ backgroundColor: color, opacity: active[id] ? 1 : 0.2 }}
              />
              <span
                className={`text-sm transition-colors duration-200 ${
                  active[id] ? "text-gray-800" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
