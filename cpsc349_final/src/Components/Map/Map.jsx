import { useRef, useEffect } from "react";
import styles from "./Map.module.css";
import mapboxgl from "mapbox-gl";
import { countriesList } from "../../data/countriesList.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiaGllbm5ndXllbjUxMyIsImEiOiJja2k5bHZzcW8waDBtMzJzMzQ1ZDJtejR4In0.WtppD7BgqI-wYjukdJChDw";

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [5, 34],
      zoom: 2,
    });
    countriesList.forEach((country) => {
      var popup = new mapboxgl.Popup({
        className: styles.detail,
        closeButton: false,
      }).setHTML(
        `
            <h2><u>` +
          country.name +
          `</u></h2>`
      );

      new mapboxgl.Marker({})
        .setLngLat([country.longitude, country.latitude])
        .setPopup(popup)
        .addTo(map);
    });
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    return () => map.remove();
  }, []);
  return <div className={styles.mapContainer} ref={mapContainerRef} />;
};
export default Map;
