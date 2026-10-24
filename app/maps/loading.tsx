import "@/app/globals.css";
import MapsFormSkeleton from "@/components/MapsForm/MapsFormSkeleton";
import PaginationSkeleton from "@/components/Pagination/PaginationSkeleton";
import Skeleton from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={`container ${styles.mapsRow}`}>
      <section>
        <h1 className="heading">Maps</h1>

        <MapsFormSkeleton />
      </section>

      <section className={styles.maps}>
        {new Array(10).fill(0).map((_, i) => (
          <Skeleton key={i} width={"100%"} height={120} />
        ))}
      </section>

      <section>
        <PaginationSkeleton />
      </section>
    </div>
  );
};

export default Loading;
