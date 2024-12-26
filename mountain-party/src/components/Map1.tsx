// MapComponent.js
import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import { fromLonLat, Projection } from "ol/proj";
import {
  DblClickDragZoom,
  defaults as defaultInteractions,
} from "ol/interaction.js";

export const Map1 = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const projection = new Projection({
      code: "EPSG:3857",
      units: "m",
    });

    const map = new Map({
      target: mapElement.current as HTMLElement,
      interactions: defaultInteractions().extend([new DblClickDragZoom()]),
      layers: [osmLayer],
      view: new View({
        projection,
        center: fromLonLat([12.93088, 63.39455]),
        zoom: 20,
      }),
    });
    return () => map.setTarget("");
  }, []);

  return (
    <div
      style={{ height: "600px", width: "100%" }}
      ref={mapElement}
      className="map-container"
    />
  );
};
