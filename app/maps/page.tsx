import MapCard from "@/components/Map/MapCard";
import MapsForm from "@/components/MapsForm/MapsForm";
import type { MapType } from "../types";
import styles from "./page.module.css";

const fetchMaps = async () => {
  const response = await fetch(
    "https://api.beatsaver.com/maps/latest?pageSize=20",
  );

  if (!response.ok) throw new Error("Error getting maps");

  const data = await response.json();
  return data.docs;
};

const Page = async () => {
  const maps: MapType[] = await fetchMaps();

  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <MapsForm />
      </section>

      <section className={styles.maps}>
        {maps.map((map) => (
          <MapCard key={map.id} map={map} />
        ))}
      </section>
    </div>
  );
};

export default Page;
