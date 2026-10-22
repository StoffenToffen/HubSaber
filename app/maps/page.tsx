import MapCard from "@/components/Map/MapCard";
import MapsForm from "@/components/MapsForm/MapsForm";
import Pagination from "@/components/Pagination/Pagination";
import { fetchData } from "../featches";
import type { FetchType } from "../types";
import styles from "./page.module.css";

interface PageProps {
  searchParams: Promise<Record<string, string>>;
}

const Page = async ({ searchParams }: PageProps) => {
  const params = await searchParams;

  const { docs: maps, info: fetchInfo } = await fetchData<FetchType>(
    "search/text",
    "0",
    String(new URLSearchParams(params)),
  );

  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <MapsForm params={params} />
      </section>

      <section className={styles.maps}>
        {maps.map((map) => (
          <MapCard key={map.id} map={map} />
        ))}
      </section>

      <section>
        <Pagination fetchInfo={fetchInfo} params={params} />
      </section>
    </div>
  );
};

export default Page;
