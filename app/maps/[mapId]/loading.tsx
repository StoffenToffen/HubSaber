import Skeleton from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

const Loading = () => {
  return (
    <div className={`container ${styles.mapRow}`}>
      <section className={styles.mapInfo}>
        <div className={styles.mapInfoTop}>
          <div className={styles.mapCover}>
            <Skeleton width={"100%"} height={"100%"} />
          </div>

          <div>
            <div>
              <Skeleton width={150} height={20} />
            </div>

            <div>
              <Skeleton width={100} height={16} />
            </div>

            <div>
              <Skeleton width={50} height={12} />
            </div>
          </div>
        </div>

        <div>
          <div className={styles.mapStatsWrapper}>
            <Skeleton width={200} height={16} />
          </div>

          <div className={styles.mapTagGroups}>
            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Tags:</h3>

              <div className={styles.mapTags}>
                <Skeleton width={50} height={20} />
                <Skeleton width={30} height={20} />
                <Skeleton width={70} height={20} />
              </div>
            </div>

            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Status:</h3>

              <div className={styles.mapTags}>
                <Skeleton width={50} height={20} />
              </div>
            </div>

            <div className={styles.mapTagGroup}>
              <h3 className={styles.mapTagsTitle}>Mods:</h3>

              <div className={styles.mapTags}>
                <Skeleton width={70} height={20} />
              </div>
            </div>
          </div>

          <div className={styles.mapDescription}>
            <div>
              <Skeleton width={"80%"} height={16} />
            </div>
            <div>
              <Skeleton width={"80%"} height={16} />
            </div>
            <div>
              <Skeleton width={"80%"} height={16} />
            </div>
            <div>
              <Skeleton width={"40%"} height={16} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.diffs}>
        <Skeleton width={"100%"} height={60} />
        <Skeleton width={"100%"} height={60} />
        <Skeleton width={"100%"} height={60} />
      </section>
    </div>
  );
};

export default Loading;
