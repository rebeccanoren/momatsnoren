<script>
  import { onMount, onDestroy } from "svelte";
  import mapboxgl from "mapbox-gl";
  import "mapbox-gl/dist/mapbox-gl.css";

  let map;
  let mapContainer;

  const lng = 11.0436374; // Longitude for Ekenäs Havshotell
  const lat = 58.8951707; // Latitude for Ekenäs Havshotell
  const zoom = 10;

  const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

  const kyrkaCoordinates = [11.023525, 58.885363]; // Kosters Kyrka
  const stromstadCoordinates = [11.1748, 58.9388365]; // Strömstad
  const kostersrokeriCoordinates = [11.0455763, 58.8932152]; // Kosters Rökeri

  onMount(() => {
    mapboxgl.accessToken = accessToken;

    // Ensure the map container is fully rendered before map creation
    setTimeout(() => {
      map = new mapboxgl.Map({
        container: mapContainer,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });

      map.on("load", () => {
        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(kyrkaCoordinates)
          .setPopup(new mapboxgl.Popup().setText("Kosters Kyrka")) // Optional Popup
          .addTo(map);

        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(stromstadCoordinates)
          .setPopup(new mapboxgl.Popup().setText("Strömstad Norra Hamnen")) // Optional Popup
          .addTo(map);

        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(kostersrokeriCoordinates)
          .setPopup(new mapboxgl.Popup().setText("Kosters Rökeri")) // Optional Popup
          .addTo(map);

        new mapboxgl.Marker({ color: "blue", draggable: false })
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setText("Ekenäs Havshotell")) // Optional Popup
          .addTo(map);
      });
    }, 0); // Timeout ensures that mapContainer is ready
  });

  onDestroy(() => {
    if (map) {
      map.remove();
      map = null;
    }
    mapContainer = null;
  });
</script>

<div class="map-container">
  <div class="map" bind:this={mapContainer}></div>
</div>

<style>
  .map-container {
    width: 80vh;
    height: 80vh;
    position: relative;
    overflow: hidden;
    border-radius: 24px;
  }

  .map {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 799px) {
    .map-container {
      width: 300px;
      height: 300px;
    }
  }
</style>
