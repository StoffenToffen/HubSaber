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

  const data = await fetchData<FetchType>(
    "search/text",
    "0",
    String(new URLSearchParams(params)),
  );

  const { docs: maps, info: fetchInfo } =
    typeof data !== "string" ? data : { docs: null, info: null };

  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <MapsForm params={params} />
      </section>

      <section className={styles.maps}>
        {maps ? (
          maps.length ? (
            maps.map((map) => <MapCard key={map.id} map={map} />)
          ) : (
            <span className={styles.resultMsg}>No results found</span>
          )
        ) : (
          typeof data === "string" && (
            <span className={`text--red ${styles.resultMsg}`}>{data}</span>
          )
        )}
      </section>

      <section>
        {maps && maps.length > 0 && (
          <Pagination fetchInfo={fetchInfo} params={params} />
        )}
      </section>
    </div>
  );
};

export default Page;
