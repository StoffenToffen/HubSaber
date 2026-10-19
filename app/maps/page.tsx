import MapCard from "@/components/Map/MapCard";
import MapsForm from "@/components/MapsForm/MapsForm";
import { fetchData } from "../featches";
import type { MapType } from "../types";
import styles from "./page.module.css";

const Page = async () => {
  const maps = await fetchData<MapType[]>("maps/latest", "", "pageSize=40");

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
