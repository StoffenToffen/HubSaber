import MapCard from "@/components/Map/MapCard";
import MapsForm from "@/components/MapsForm/MapsForm";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <MapsForm />
      </section>

      <section className={styles.maps}>
        {Array.from({ length: 8 }, (_, i) => (
          <MapCard key={i} />
        ))}
      </section>
    </div>
  );
};

export default Page;
