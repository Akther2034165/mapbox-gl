import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
mapboxgl.accessToken =
  "pk.eyJ1IjoibWRha3RoZXJob3NlbiIsImEiOiJja3V6am80NGwwNTVqMnVwYXN1OW83M25uIn0.Aidpma2Eb2_0n2VMVz8xGQ";
const MapDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.269676, 39.383011],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default MapDirection;
